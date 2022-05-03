import { defineComponent, ref } from 'vue';
// 组合式Api写法

interface PropType{
  msg:string
}
export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    const count = ref(0);
    return (props:PropType) => (
        <div>
          <p>{props.msg}</p>
          <p>count: {count.value}</p>
        </div>
    );
  },
});

//  options Api写法
// export default defineComponent({
//     props:{
//       msg: {
//         type:String,
//         required:true
//       }
//     },
//     data(){
//       return{
//         count:0
//       }
//     },
//     render(){
//       return (
//         <div>
//           {this.msg}
//           {this.count}
//         </div>
//       )
//     }
//   },
// )
