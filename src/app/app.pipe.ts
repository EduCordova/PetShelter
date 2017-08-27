
import { Pipe, PipeTransform } from '@angular/core'
import { Idata } from './data';


@Pipe({
    name: 'filtrocmb'
    
})

export class FiltradoCombos implements PipeTransform {

 
    // transform(value: Idata[], filtro:string="Macho",filter2:string="Grande"): Idata[]{
    // if(filtro=="Macho" || filtro=="Hembra" ){
    //      return  value.filter((dat:Idata)=>dat.sexo.indexOf(filtro) !==-1)
    // }if(filtro=="Grande" || filtro=="Pequeña" || filtro=="Mediana"){
    //      return  value.filter((dat:Idata)=>dat.altura.indexOf(filtro) !==-1)
    // }if(filtro==""){
    //        return value.filter((dat:Idata)=>dat);

    // }

    transform(value: Idata[], filtro: string, filtro2: string, filtro3: string): Idata[] {
        let result = new Array<Idata>()

        // CON 3 DATOS INGRESADOS!!
        if (filtro && filtro2 && filtro3) {
            value.forEach((dato, index, collection) => {

                if (dato.sexo == filtro && dato.altura == filtro2 && dato.tipo == filtro3) {
                    result.push(dato)
                }

            })
        }

        // CON 1 DATOS INGRESADOS!!
        if (filtro && filtro2 == "" && filtro3 == "") {
            value.forEach((dato, index, collection) => {

                if (dato.sexo == filtro) {
                    result.push(dato)
                }

            })
        }


        if (filtro == "" && filtro2 && filtro3 == "") {
            value.forEach((dato, index, collection) => {

                if (dato.altura == filtro2) {
                    result.push(dato)
                }

            })
        }

        if (filtro == "" && filtro2 == "" && filtro3) {
            value.forEach((dato, index, collection) => {

                if (dato.tipo == filtro3) {
                    result.push(dato)
                }

            })
        }


        //CON 2 DATOS INGRESADOS
        if (filtro && filtro2 && filtro3 == "") {
            value.forEach((dato, index, collection) => {

                if (dato.sexo == filtro && dato.altura == filtro2) {
                    result.push(dato)
                }

            })
        }

        if (filtro && filtro2 == "" && filtro3) {
            value.forEach((dato, index, collection) => {

                if (dato.sexo == filtro && dato.tipo == filtro3) {
                    result.push(dato)
                }

            })
        }

        if (filtro=="" && filtro2 && filtro3) {
            value.forEach((dato, index, collection) => {

                if (dato.altura == filtro2 && dato.tipo == filtro3) {
                    result.push(dato)
                }

            })
        }


        //sin datos!!

        if (filtro == "" && filtro2 == "" && filtro3 == "") {
            value.forEach((dato, index, collection) => {


                result.push(dato)


            })
        }


        // if(filtro){
        //     value.forEach((dato,index,collection)=>{

        //         if(dato.sexo==filtro && (result.findIndex((dat)=>dat.id==dato.id)===-1) ){
        //             result.push(dato)
        //         }


        //     })
        // }

        //  if(filtro2){
        //     value.forEach((dato,index,collection)=>{

        //         if(dato.altura==filtro2 && (result.findIndex((dat)=>dat.id==dato.id)===-1) ){
        //             result.push(dato)
        //         }


        //     })
        // }
        // console.log(filtro + " y " + filtro2 + " y " + filtro3)
        // console.log(result)
       
        return result

   

    }



}