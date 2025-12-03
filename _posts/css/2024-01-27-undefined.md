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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YLEPVVE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHvNIst%2FHoENhhj%2Bq9sZjKGtJ1ggdAypCMrEh1xtKus%2BAiBymbaObH5a78WLQdbM5sajjQtCHtHlOYXW5l1PbrSBxSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMoa4C6SmCwOGu3a7OKtwDcoYZbRxnUpklMAixPCm6deyKAZq10h25PwJk786XEe54%2BPBZNmpRDfwkOp8IGeoz2snlf9wfwCj7B8HCYegvYHlhCv0RILUp%2Bjx0iEB9PrJzZIal0VQmETxmZFJwCXl5MziREh%2FO2tu4zSyyaPQ8FpqKLEhOGL85zQ0iA7d6ve2qHRcR7gxYDmrDtlO4GO8l9gH4c%2Fmk%2BLE741YVxWZbCHimSCCNg4h0gKOgcqqoiwX13Bv1If2NF09ZGj1nTpCsMMGaXqdpy61yGiknms5VxKkdz5cNEhS2zP2rzTPce7NCBNr23Fz9xOGIm8zJtFd9jGZaWQB3QW0oM6QKaed9GCf3PtFbwVvAvimP1I7m8LS5bdZ5junLsI%2FeNZzQe8Kix%2FwrbSbpn45pTl3cKA4GgNBNSR0P3tcCLBaFnt6zr1NfDeVexlXe1NauK%2FuHYhf4Pmv4brY0H46LtyICfjjlog%2Ft7CFBaoYoGhhx1u%2F6opjfQkcGYJ9cE9EidHqsBwrOh%2FUH%2FOBVVMuMd6ELK5WlZAclystJ%2FuGN9fSlLyT934ftsPApLxV%2BaWrSFXn6%2FlxYw4bXR04bL4nCJesCoS7p%2FJwQWb9zVMOUUSOfm3%2Bg0EpXAahGr%2BOxdb1%2B62wwieW9yQY6pgEh1J3fmGbcNuRDpSWBneGcrR8v75ZdarPWFbE5P2VXecI400zzCvArVUp31gldxaCbqINdqnjt6T%2F1kWm71XfNtO%2BGTJBxNHesXw1q7rTKvI6XOcsfcc7hodAX0RTLrS80RAGz5%2BEjwwdD%2Bc3NbwRE%2FgEKToXqtvQVOlonlik0BfJ1KA2OgPNv4qwb0EueS%2BF9nUtYkhbEy6Mz%2FmJeBjAU9D4h2WG0&X-Amz-Signature=ef8bf910aae36fa68dad6c5380f76c499f56a23aaea6f87065d53f3b0925e8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YLEPVVE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIHvNIst%2FHoENhhj%2Bq9sZjKGtJ1ggdAypCMrEh1xtKus%2BAiBymbaObH5a78WLQdbM5sajjQtCHtHlOYXW5l1PbrSBxSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMoa4C6SmCwOGu3a7OKtwDcoYZbRxnUpklMAixPCm6deyKAZq10h25PwJk786XEe54%2BPBZNmpRDfwkOp8IGeoz2snlf9wfwCj7B8HCYegvYHlhCv0RILUp%2Bjx0iEB9PrJzZIal0VQmETxmZFJwCXl5MziREh%2FO2tu4zSyyaPQ8FpqKLEhOGL85zQ0iA7d6ve2qHRcR7gxYDmrDtlO4GO8l9gH4c%2Fmk%2BLE741YVxWZbCHimSCCNg4h0gKOgcqqoiwX13Bv1If2NF09ZGj1nTpCsMMGaXqdpy61yGiknms5VxKkdz5cNEhS2zP2rzTPce7NCBNr23Fz9xOGIm8zJtFd9jGZaWQB3QW0oM6QKaed9GCf3PtFbwVvAvimP1I7m8LS5bdZ5junLsI%2FeNZzQe8Kix%2FwrbSbpn45pTl3cKA4GgNBNSR0P3tcCLBaFnt6zr1NfDeVexlXe1NauK%2FuHYhf4Pmv4brY0H46LtyICfjjlog%2Ft7CFBaoYoGhhx1u%2F6opjfQkcGYJ9cE9EidHqsBwrOh%2FUH%2FOBVVMuMd6ELK5WlZAclystJ%2FuGN9fSlLyT934ftsPApLxV%2BaWrSFXn6%2FlxYw4bXR04bL4nCJesCoS7p%2FJwQWb9zVMOUUSOfm3%2Bg0EpXAahGr%2BOxdb1%2B62wwieW9yQY6pgEh1J3fmGbcNuRDpSWBneGcrR8v75ZdarPWFbE5P2VXecI400zzCvArVUp31gldxaCbqINdqnjt6T%2F1kWm71XfNtO%2BGTJBxNHesXw1q7rTKvI6XOcsfcc7hodAX0RTLrS80RAGz5%2BEjwwdD%2Bc3NbwRE%2FgEKToXqtvQVOlonlik0BfJ1KA2OgPNv4qwb0EueS%2BF9nUtYkhbEy6Mz%2FmJeBjAU9D4h2WG0&X-Amz-Signature=04f3251e07dc0d28b0fb57dd7557efedc7ae8f74851bf3b54d88114ca6ffc18b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

