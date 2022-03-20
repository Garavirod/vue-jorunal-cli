<template>
    <template v-if="entry">
        <div            
            class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fa-3 fs-3 fw-bold"> {{dateFormatEntry.day}} </span>
                <span class="mx-1 fs-3"> {{dateFormatEntry.month}} </span>
                <span class="mx-2 fs-4 fw-light"> {{ dateFormatEntry.yearDay }} </span>
            </div>

            <div>
                <input 
                    ref="imageRefInput" 
                    type="file" 
                    @change="onSelectedImage"
                    v-show="false"
                    accept="image/png, image/jpeg"
                >

                <button @click="deleteEntryBook(entry)" v-if="entry.id" class="btn btn-danger mx-2">
                    Delete
                </button>
                <button @click="openFileSellector" class="btn btn-primary mx-2">
                    Upload photo
                </button>
            </div>
        </div>
        <hr>
        <div class="d-flex flex-column px-3 h-75">
            <textarea v-model="entry.text" placeholder="What happend today?"></textarea>
        </div>
        <Fab @on:click="saveEntry" :wordButton="'Save'" />
        <!-- <img 
            src="https://picsum.photos/200/300" 
            alt="entry-picture"
            class="img-thumbnail"
        > -->

        <img 
            v-if="localImage"
            :src="localImage" 
            alt="entry-picture"
            class="img-thumbnail"
            draggable="false"
        >
    </template>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters, mapActions } from 'vuex'
import Swal from 'sweetalert2'
import getDayMonthYear from '../helper/getDayMonthYear'

export default {
    props:{
        id: {
            type: String,
            required: true,
        }
    },
    data(){
        return {
            entry: null,
            localImage:null,
            fileSelected:null
        }
    },
    computed:{
        ...mapGetters('journal',['getEntryById']),
        dateFormatEntry(){
            return getDayMonthYear( this.entry.date );
        },
    },
    components:{
        Fab: defineAsyncComponent(()=> import('../components/Fab.vue'))
    },
    methods:{
        /* VUEX */
        ...mapActions('journal',['updateEntry','createEntry','deleteEntry']),

        /* LOCAL */
        loadEntry(){
            let entry;
            if( this.id === 'new' ){

                entry = {
                    text:'Write your stor here...',
                    date: new Date().getTime(),
                }

            }else{
                entry = this.getEntryById(this.id);
                if( !entry ) this.$router.push({ name: 'no-entry' })
            }

            this.entry = entry

        },
        async saveEntry(){    

            new Swal({
                title:'Wait please...',
                allowOutsideClick:false,
            })

            Swal.showLoading()

            if( this.entry.id ){
                await this.updateEntry( this.entry )
            }else{
                // Create new entry
                const id = await this.createEntry( this.entry )
                console.log(id);
                this.$router.push({name:'entry',params:{id}})
            }                    

            Swal.fire('Entry state','Entry was saved successfully!','success')
        },

        deleteEntryBook: async function ( entry ){

            const { isConfirmed } = await Swal.fire({
                title:'Are you sure you want to delete this entry?',
                text:'Once deleted you can not recover it any more',
                showDenyButton:true,
                confirmButtonText:"Yes, I am sure"
            })


            if ( isConfirmed ) {

                new Swal({
                    title:'Wait please...',
                    allowOutsideClick:false,
                })

                Swal.showLoading()

                await this.deleteEntry( entry )
                this.$router.push({name:'no-entry'})      
                
                Swal.fire('Deleted!','','success')
            }
        },

        onSelectedImage : function ( event ){
            this.fileSelected = event.target.files[0]
            if( this.fileSelected ){
                const fr = new FileReader()
                fr.onload = () => this.localImage = fr.result
                fr.readAsDataURL( this.fileSelected )
            }else{
                this.localImage = null
                this.fileSelected = null
            }
        },

        openFileSellector: function (){
            this.$refs.imageRefInput.click()
        }
    },
    created(){
        this.loadEntry();
    },
    watch:{
        id(){
            this.loadEntry();
        }
    }
}
</script>

<style lang="scss">
    textarea{
        font-size: 20;
        border: none;
        height: 100%;

        &:focus{
            outline: none;
        }
    }

    img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    }
</style>