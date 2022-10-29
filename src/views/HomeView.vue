<template>
  <div class="container mx-auto">
    <div class="card lg:translate-x-full lg:translate-y-1/2 translate-y-1/3 flex-shrink-0 w-full max-w-lg max-h-lg shadow-2xl py-5">
      <h2 class="text-3xl text-white font-bold text-center">
        Tableau déchange
      </h2>
      <div class="divider"></div> 
      <div class="card-body px-4">
        <div class="text-center text-white text-semibold text-2xl">
          <span>1 {{form.from}}</span> = <span>{{this.$store.getters.getExchangeData}} {{form.to}}</span>
        </div>
        <form action="">
          <div class="form-control">
              <label class="label">
                <span class="label-text">De</span>
              </label>
              <select class="select select-bordered w-full" v-model="form.from" @change="getValue">
                <option value="">Selectionner la devise</option>
                <option v-for="(d,i) in this.$store.getters.getDevise" :key="i">{{d}}</option>
              </select>
              <!-- <label class="label">
                <a href="#" class="label-text-alt link link-hover">Mot de passe oublié?</a>
              </label> -->
            </div>
            <div class="divider py-5">
              <button class="btn rounded-full">
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Vers</span>
              </label>
              <select class="select select-bordered w-full" v-model="form.to" @change="getValue">
                <option value="">Selectionner la devise</option>
                <option v-for="(d,i) in this.$store.getters.getDevise" :key="i">{{d}}</option>
              </select>
              <!-- <label class="label">
                <a href="#" class="label-text-alt link link-hover">Mot de passe oublié?</a>
              </label> -->
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
   
  },
  data() {
    return {
      devises:[],
      form:{
        from:"XOF",
        to:"USD"
      },
      exchange:0
    }
  },
  created() {
    this.$store.dispatch("fetchDevise")
    setTimeout(() => {
      this.devises = this.$store.getters.getDevise
    }, 2000);
  },
  methods: {
    getValue(){
      if(this.form.from && this.form.to){
        this.$store.dispatch("doRequest",this.form)
        setTimeout(() => {
          this.exchange = this.$store.getters.getExchangeData
        }, 1000);
      }
    }
  },
}
</script>
