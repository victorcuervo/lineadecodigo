---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFTX2FDM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrkdcfoB%2B4MRMz3mV89CfMdbcDzuSxORV79geMov5LAgIgbztVPCaemsPDZ%2Fz%2BYC5EkiX3Zp5iYipGUEE49KtcsbcqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNGli3vwvS6ZQdtIyrcA7RW362qcrTqGXw0i0sSZa4E%2BkUqAvpQOAi6mNCZ5M%2BiMq8jAuT6NgEL55QYVZfMomapDV1GpH3ElYn6WeLjcXK%2BAbWcQSaCoyuLYv4SEUcx8jLg%2FBEEn%2BI8IciNMEMpdDz%2F4b3Rf6PjBeW63SXOF6YpNdJ4fIs7HSeocDKb%2F%2F241fTW5hAT7g259SVmVS163l3WiF3NOYt%2FF4PFBifx6kU9rjJ51iSs8g5jGXpMl%2FYl7fJMcwtJLX9hKoqicJlkB0RE7T5pChgGsgUFWPYm04MabxqfCwGGkFGkD3KNbblf%2BBMNL17KJC8dT101LbXiYnQYL3qIDhG%2BN9iDVSWj7Casjd6d%2FSrJTqmPdUzrc%2BukIDNz7mHowlsSRjy1Pr0q4WBSEX67Y%2Fe8fAvSVXWxY%2Bc9VtlKaux%2Fyvi6tB7qmbg1h45dltKBDf21S2mnDkES78KYtIFS%2B9CCbvM07mGODGy4TcuSV5%2BH7j7oehGu7tcQJY70ti0wszLeMBdF1l5qSOoRikYFgpOYpk5o%2BBw4aVmczegST84YiOzzJZ70DZf6ii6vLVsJuzjCVMzCeNefcHxSbQAH1frxoYG8q%2FuwoYr6j8z3hT%2FIO1E0lPA8%2FUKJlsWFYJg8qBoEoVh3MPzp3ckGOqUBrmF50CvJHb%2FOuq624oVsFSwEfaI9EjZ4JTbJqdRnX7hlvWDiWLDWgtjdfHiDkDwOKSzSknf1femUdRakFs3O%2B9FoSf%2Be9%2FmMfSrzCLoe9dXLbpYOiljYRLaSiYO%2FEc0zaN0FbZtnnp%2Bp7lLuUmjTjOgy3W%2Bv3AM8VeE5Qo64ri0fTeIGsAs1FkGehrc5LLq%2FcDCmXm1%2BSc6G%2FVY0P80FNDf0fY9T&X-Amz-Signature=dd4e2eff808b66350779711e887993025a9c9b4c07d3ac61b2196bc71ef8efa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFTX2FDM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrkdcfoB%2B4MRMz3mV89CfMdbcDzuSxORV79geMov5LAgIgbztVPCaemsPDZ%2Fz%2BYC5EkiX3Zp5iYipGUEE49KtcsbcqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNGli3vwvS6ZQdtIyrcA7RW362qcrTqGXw0i0sSZa4E%2BkUqAvpQOAi6mNCZ5M%2BiMq8jAuT6NgEL55QYVZfMomapDV1GpH3ElYn6WeLjcXK%2BAbWcQSaCoyuLYv4SEUcx8jLg%2FBEEn%2BI8IciNMEMpdDz%2F4b3Rf6PjBeW63SXOF6YpNdJ4fIs7HSeocDKb%2F%2F241fTW5hAT7g259SVmVS163l3WiF3NOYt%2FF4PFBifx6kU9rjJ51iSs8g5jGXpMl%2FYl7fJMcwtJLX9hKoqicJlkB0RE7T5pChgGsgUFWPYm04MabxqfCwGGkFGkD3KNbblf%2BBMNL17KJC8dT101LbXiYnQYL3qIDhG%2BN9iDVSWj7Casjd6d%2FSrJTqmPdUzrc%2BukIDNz7mHowlsSRjy1Pr0q4WBSEX67Y%2Fe8fAvSVXWxY%2Bc9VtlKaux%2Fyvi6tB7qmbg1h45dltKBDf21S2mnDkES78KYtIFS%2B9CCbvM07mGODGy4TcuSV5%2BH7j7oehGu7tcQJY70ti0wszLeMBdF1l5qSOoRikYFgpOYpk5o%2BBw4aVmczegST84YiOzzJZ70DZf6ii6vLVsJuzjCVMzCeNefcHxSbQAH1frxoYG8q%2FuwoYr6j8z3hT%2FIO1E0lPA8%2FUKJlsWFYJg8qBoEoVh3MPzp3ckGOqUBrmF50CvJHb%2FOuq624oVsFSwEfaI9EjZ4JTbJqdRnX7hlvWDiWLDWgtjdfHiDkDwOKSzSknf1femUdRakFs3O%2B9FoSf%2Be9%2FmMfSrzCLoe9dXLbpYOiljYRLaSiYO%2FEc0zaN0FbZtnnp%2Bp7lLuUmjTjOgy3W%2Bv3AM8VeE5Qo64ri0fTeIGsAs1FkGehrc5LLq%2FcDCmXm1%2BSc6G%2FVY0P80FNDf0fY9T&X-Amz-Signature=8aede7e1bc7ee7628c866c78e476af3979a09bed87c2c0569d3e79db2656e94a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

