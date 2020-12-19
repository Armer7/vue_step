<template>
  <div>
      <article class = "card-body border-bottom p-3"
    >
					<div class = "row">
						<div class = "col-md-7">
							<figure class = "media mb-0">
								<div class = "img-wrap mr-3"><img :src = "`${productData.editions[0].img}`"
                                                  class = "border img-sm"></div>
								<figcaption class = "media-body">
									<a class = "title h6">{{productData.title}}</a>
                  <p class = "text-muted">{{productData.descr}}</p>
									<div class = "price-wrap">{{(+productData.price).toFixed(0)}}р.</div>
								</figcaption>
							</figure>
						</div> <!-- col.// -->
						<div class = "col-md-5 text-md-right text-right">
							<div class = "input-group input-spinner">
							  <div class = "input-group-prepend">
							    <button class = "btn m-0" type = "button" id = "button-plus" @click = "incrementItem"> + </button>
							  </div>
							  <input type = "text" class = "form-control" :value = "productData.quantity" readonly>
							  <div class = "input-group-append">
							    <button class = "btn m-0" type = "button" id = "button-minus" @click = "decrementItem"> − </button>
							  </div>
							</div> <!-- input-group.// -->
							<a class = "btn btn-light" @click = "deleteFromCart"> <i class = "fa fa-trash"></i> </a>
						</div>
					</div> <!-- row.// -->
			</article> <!-- card-group.// -->

  </div>
</template>

<script>
export default {
  name: 'CardShopping',
  components: {
  },
  props:{
    productData:{
      type: Object,
      default: {}
    },
  },
  mounted() {

  },
  methods:{

    deleteFromCart(){
      this.$emit('deleteFromCart')
    },

    incrementItem(){
      this.$emit('incrementItem')
    },

    decrementItem(){
      this.$emit('decrementItem')
    },

  },
}
</script>

<style lang = 'scss'>

</style>
