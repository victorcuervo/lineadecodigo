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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JGLYZL2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFLZzMvIqgm6oH2oq5Tj%2BCstG5Hj%2FMNWbw5swmzYFlasAiEA1TuGPQrQKf7Ng5gDT2DoOMgXFo3LJWeoaApwx2UhzVsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKcOmG%2BGMr8Vk%2BbDjyrcA2wF5EiunYZjLClItYfqaWlSRmdRTWsfZ%2F%2Fr4GMdBQhGmR2f1ed0rtjGs5Md1GXPTgDgJSf%2BdjxuVc0sebkhvdHhsqV6GeohZrQdIf5cGSI%2BXI4kAKJgtNSRfAjUh0cZq46nLyNlHjZaN0kYO%2FYx9UdTIuYvq%2F9nf6FSzUhcxyAnpOjyUEt2WYzcNXPTjJkj94G9%2FpDmx%2ByB46ovn9JZdlmVky0u49hbJVEkocwBMVuYwuSk8wvIrmVlEquCw%2FEdv4E7Xafo3SLJ95Z3Fsa3zi7DNLbSr1B6M6FCsTsHqT9%2BBFtb1BAeOEHK8Irh3qE%2BFH9veqhXJZUA%2BdKWVCj7Nwe4ce%2B%2B0IGYATQYwVT0VdDcASaT%2Ft0XBGP1BVa48DbVGuS1GYx1KXw0DtMjJe7zDmUq5DgHfDP345DTlgKk9U%2FuzTXHNxdRuFSY2McmMCjliY45bsgMImq67y7uu4AP7zVEvciHUby6abc%2FAZeHbYTT1yNP98MWhUMPueuq%2Bh28%2FGrnZo%2BHR3VuypxjaLUnlNqlidOY0IWu8is%2FiYC9xjeMM9ZCE0OIoY95b%2BT9q77Uv02uaDBv0EHDJy1AGcZv9q%2FQbJZlHepQ9%2FNinTzj%2BUkkmDCEMG4T%2BxfowKMKMPzUv8kGOqUBX7QFW5D%2FjRQxtRmpkTo2Trj3VgBxS%2BoMMFen7DFYbA0W9E8gxelrLqYSq2FyQew%2BUPrEqT1ZzShxiM%2FXAR8%2BVGDtlQ%2Fp8NPphsOMRoZdtlzPVXg1bcbqT4EEMYfQStQAVKPvHCfxxv3XNWLmN8VWjOMr6NhCUVJOxZ7v%2BgDI%2F6bib%2FkNcaeqHq%2FAovJc1jMsyHzylSQJQ08ymBH0BqvSXqHSuGWp&X-Amz-Signature=a3421928b3f42fbe52ecd29e3e4874ddab67345b3c90b167a34624f1c0ca89c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JGLYZL2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFLZzMvIqgm6oH2oq5Tj%2BCstG5Hj%2FMNWbw5swmzYFlasAiEA1TuGPQrQKf7Ng5gDT2DoOMgXFo3LJWeoaApwx2UhzVsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKcOmG%2BGMr8Vk%2BbDjyrcA2wF5EiunYZjLClItYfqaWlSRmdRTWsfZ%2F%2Fr4GMdBQhGmR2f1ed0rtjGs5Md1GXPTgDgJSf%2BdjxuVc0sebkhvdHhsqV6GeohZrQdIf5cGSI%2BXI4kAKJgtNSRfAjUh0cZq46nLyNlHjZaN0kYO%2FYx9UdTIuYvq%2F9nf6FSzUhcxyAnpOjyUEt2WYzcNXPTjJkj94G9%2FpDmx%2ByB46ovn9JZdlmVky0u49hbJVEkocwBMVuYwuSk8wvIrmVlEquCw%2FEdv4E7Xafo3SLJ95Z3Fsa3zi7DNLbSr1B6M6FCsTsHqT9%2BBFtb1BAeOEHK8Irh3qE%2BFH9veqhXJZUA%2BdKWVCj7Nwe4ce%2B%2B0IGYATQYwVT0VdDcASaT%2Ft0XBGP1BVa48DbVGuS1GYx1KXw0DtMjJe7zDmUq5DgHfDP345DTlgKk9U%2FuzTXHNxdRuFSY2McmMCjliY45bsgMImq67y7uu4AP7zVEvciHUby6abc%2FAZeHbYTT1yNP98MWhUMPueuq%2Bh28%2FGrnZo%2BHR3VuypxjaLUnlNqlidOY0IWu8is%2FiYC9xjeMM9ZCE0OIoY95b%2BT9q77Uv02uaDBv0EHDJy1AGcZv9q%2FQbJZlHepQ9%2FNinTzj%2BUkkmDCEMG4T%2BxfowKMKMPzUv8kGOqUBX7QFW5D%2FjRQxtRmpkTo2Trj3VgBxS%2BoMMFen7DFYbA0W9E8gxelrLqYSq2FyQew%2BUPrEqT1ZzShxiM%2FXAR8%2BVGDtlQ%2Fp8NPphsOMRoZdtlzPVXg1bcbqT4EEMYfQStQAVKPvHCfxxv3XNWLmN8VWjOMr6NhCUVJOxZ7v%2BgDI%2F6bib%2FkNcaeqHq%2FAovJc1jMsyHzylSQJQ08ymBH0BqvSXqHSuGWp&X-Amz-Signature=6443ba633f695aac9aea573848bcd5ace64fe61b4baea434fa794848a6dfd939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

