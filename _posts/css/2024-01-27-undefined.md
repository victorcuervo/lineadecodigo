---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGNITHXR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCMIu%2Bx74eDLokOwDEB%2FvcPQKKJmAXybIGc8UNUGBNV3AIhALn1kAzPeCTVq9FYNYYmG100GWQaeOibVj0vNyNKRUofKv8DCCIQABoMNjM3NDIzMTgzODA1IgzbcOlPYxGAMUrp4Vwq3APT1N4LeHFaOoUDoOkOZQv8ED1HJ95FL0ny86zy63YyyUBwTrF8YnrU8MLIKI5GStkPrWgOwMcGAsVp058DAMXzNo28Vxxk5VnqH01hdluxu2QMtm6KagQKjz9Jwtg97qL7KTht2K0FgqhKDHOge65J8RFUXh8AH7JvY8ylCKRLyoHeHXge0OUDnu513hhM%2Bqd0kgAC8oizBkUCWnohjj12e6XWgr7UJnSUacQYijo%2FtlxxHKVHi1JlT6gffAjDBVFJ%2FtGxxDp%2F%2FcGKdynw5aYZKl7UEPVOrni3fmKOyEJVbd56atauFIFZaw9LO%2F8zdzMD2jjVN%2FTuJz22V5uqE3oVfux83wOljirs8FpgnBNTKVwyFztJcyRzIEPGKlN5k%2BwZoHwgGaFUnR0tvX0EvaDDDrDfZ6dkGULkZWBGpryoPrwNl940qD6KdIN%2BgY%2FCf2hpeLm4z0lZSyXK%2BhhUbi4fcGtSrkC%2Fljzehw%2F32BP6VNVmUq8qbo6ujSg78zS1JcSAOboaquXz5AlZSRnowUu%2BWvC0z13BJXHSIP3Rb8VdhuBZeUbYYKpiF5wbbyw13vpebPKDg0xiaGtkjCyNObyEHqfZr9e98B2eityUQSNbB5fcmurnAuFQPwe4MTC4lr7JBjqkAfOVOpsizsii8e6UyHbWJ7IxaoltTTqL1bo5DtWMBajyx9zNuxvpcTx5RdfLnoN2iqNj78IpyCmnAq0sno7gx%2FH2owpVEBRWzaoig1xRZeEyi8wTcKv8RJDsah%2B3unGhswVCvZIVRjYV70oj6YsgKsAi6117ySPN7fJnFYfzTYEznu%2FIlOJPxe7C%2FYBibM7Fd5Fynt7EAd2UWYvWWfTRINM6io1p&X-Amz-Signature=8f3ba442566d9ec063bca408149b8261ccc04767ccae2e417f4932d9bda9cd72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGNITHXR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCMIu%2Bx74eDLokOwDEB%2FvcPQKKJmAXybIGc8UNUGBNV3AIhALn1kAzPeCTVq9FYNYYmG100GWQaeOibVj0vNyNKRUofKv8DCCIQABoMNjM3NDIzMTgzODA1IgzbcOlPYxGAMUrp4Vwq3APT1N4LeHFaOoUDoOkOZQv8ED1HJ95FL0ny86zy63YyyUBwTrF8YnrU8MLIKI5GStkPrWgOwMcGAsVp058DAMXzNo28Vxxk5VnqH01hdluxu2QMtm6KagQKjz9Jwtg97qL7KTht2K0FgqhKDHOge65J8RFUXh8AH7JvY8ylCKRLyoHeHXge0OUDnu513hhM%2Bqd0kgAC8oizBkUCWnohjj12e6XWgr7UJnSUacQYijo%2FtlxxHKVHi1JlT6gffAjDBVFJ%2FtGxxDp%2F%2FcGKdynw5aYZKl7UEPVOrni3fmKOyEJVbd56atauFIFZaw9LO%2F8zdzMD2jjVN%2FTuJz22V5uqE3oVfux83wOljirs8FpgnBNTKVwyFztJcyRzIEPGKlN5k%2BwZoHwgGaFUnR0tvX0EvaDDDrDfZ6dkGULkZWBGpryoPrwNl940qD6KdIN%2BgY%2FCf2hpeLm4z0lZSyXK%2BhhUbi4fcGtSrkC%2Fljzehw%2F32BP6VNVmUq8qbo6ujSg78zS1JcSAOboaquXz5AlZSRnowUu%2BWvC0z13BJXHSIP3Rb8VdhuBZeUbYYKpiF5wbbyw13vpebPKDg0xiaGtkjCyNObyEHqfZr9e98B2eityUQSNbB5fcmurnAuFQPwe4MTC4lr7JBjqkAfOVOpsizsii8e6UyHbWJ7IxaoltTTqL1bo5DtWMBajyx9zNuxvpcTx5RdfLnoN2iqNj78IpyCmnAq0sno7gx%2FH2owpVEBRWzaoig1xRZeEyi8wTcKv8RJDsah%2B3unGhswVCvZIVRjYV70oj6YsgKsAi6117ySPN7fJnFYfzTYEznu%2FIlOJPxe7C%2FYBibM7Fd5Fynt7EAd2UWYvWWfTRINM6io1p&X-Amz-Signature=9ec173032f20818867f8d5e99a7df941e3bf873f68e68b3ae895be5c7a4ba720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

