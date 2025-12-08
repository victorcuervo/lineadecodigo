---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHII3TAF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FgTRbGyYTsMqxuCAP7U6r8syzouYY0%2Boc%2FRqh9v6kRAIgPEbL6C5aSAPZUDlASM8EPM5HCuoCbnxehu189E1dSE0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFw7Z7gbPCOIm5AbuyrcA4rxCd0WzSF0sAG92MNJSTEKu1GocJ6P7oVnjeHyFtpH%2Bb6wn7Ek3%2B2RY93qrlxZoZdidLfoXZvDxds36hnGJYOz9Jw%2BtB1FTn61muA%2FacgRR%2FGE1BWMGr8DgOh9%2BjOaj%2Fq%2B7Jiby6hN%2FaPmNCeiUvTvRewonDefegxjdJzmCceR4lYnXvK6pgcbLyn5jGbji701%2FiaJ7Klr9HM%2F1gsMvgemqYvUgl2t%2FubGfmSNXZU%2BNbaraE9cqAtmWWtX9Iqc2bIsyGlzbvAuXW33D%2BPZ2S%2FABSQIaQ1Nqxl9543QyqCkPhr0wnsXn6QeGiHYF233SeTYRAXnlBXs%2F2f9b%2F2lje43YdbLxXUiWO8jDe6HTVzw2xQBmVXuZ%2FGMsx8iBhlX%2BvK9h1LX1BMTN1od8bycAN0LiZ1EAMSdz4mnsWwmyOT8HNYoqUUB0WcSJW4EMf1sVqOcq%2FubXpM%2B%2BiWUqeuORxdyoqKEWkPcnI68VivsV%2FZAe1DuPQrxFOLrwUJ6LCVr98DuuFNv9cyj4WPLX20Ss1i58Z4zqA70WHfUF%2FmegQNYVH2BnWuy85hPqZfwYdWdcnrnEAWHJyRc5MOtWFdiDnBBOZ8iazUMCIzBHPjtzDHlHNDG9P1yPRY6f5qGMLLB28kGOqUBkIJX81APs%2BCQmldXVNu4enki4znyDDCTHO9ShNmDlK3DPUoB5mKvA0jwaUg3yBDzYhBwC3TgKVUtLs70cVDJ89SBzTs29zQMSBCCqGEphoksmKpY8XbMzCBJuH4jQvtKkhwBHotNHHx%2BCSbPNgdz59VJ%2FzRqnOFeFgxxFHz0ulHPuLtXOSaJdLP9Tj9YTiZmcxPl1V1gJDDjqCR%2FqfVI%2Fa43k2RZ&X-Amz-Signature=caa041bbc9b75449d02e0442ce35da7dc20b59f7a8c0906da5a3f10e117a7f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHII3TAF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FgTRbGyYTsMqxuCAP7U6r8syzouYY0%2Boc%2FRqh9v6kRAIgPEbL6C5aSAPZUDlASM8EPM5HCuoCbnxehu189E1dSE0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFw7Z7gbPCOIm5AbuyrcA4rxCd0WzSF0sAG92MNJSTEKu1GocJ6P7oVnjeHyFtpH%2Bb6wn7Ek3%2B2RY93qrlxZoZdidLfoXZvDxds36hnGJYOz9Jw%2BtB1FTn61muA%2FacgRR%2FGE1BWMGr8DgOh9%2BjOaj%2Fq%2B7Jiby6hN%2FaPmNCeiUvTvRewonDefegxjdJzmCceR4lYnXvK6pgcbLyn5jGbji701%2FiaJ7Klr9HM%2F1gsMvgemqYvUgl2t%2FubGfmSNXZU%2BNbaraE9cqAtmWWtX9Iqc2bIsyGlzbvAuXW33D%2BPZ2S%2FABSQIaQ1Nqxl9543QyqCkPhr0wnsXn6QeGiHYF233SeTYRAXnlBXs%2F2f9b%2F2lje43YdbLxXUiWO8jDe6HTVzw2xQBmVXuZ%2FGMsx8iBhlX%2BvK9h1LX1BMTN1od8bycAN0LiZ1EAMSdz4mnsWwmyOT8HNYoqUUB0WcSJW4EMf1sVqOcq%2FubXpM%2B%2BiWUqeuORxdyoqKEWkPcnI68VivsV%2FZAe1DuPQrxFOLrwUJ6LCVr98DuuFNv9cyj4WPLX20Ss1i58Z4zqA70WHfUF%2FmegQNYVH2BnWuy85hPqZfwYdWdcnrnEAWHJyRc5MOtWFdiDnBBOZ8iazUMCIzBHPjtzDHlHNDG9P1yPRY6f5qGMLLB28kGOqUBkIJX81APs%2BCQmldXVNu4enki4znyDDCTHO9ShNmDlK3DPUoB5mKvA0jwaUg3yBDzYhBwC3TgKVUtLs70cVDJ89SBzTs29zQMSBCCqGEphoksmKpY8XbMzCBJuH4jQvtKkhwBHotNHHx%2BCSbPNgdz59VJ%2FzRqnOFeFgxxFHz0ulHPuLtXOSaJdLP9Tj9YTiZmcxPl1V1gJDDjqCR%2FqfVI%2Fa43k2RZ&X-Amz-Signature=beb1d9d23d7c432007b61361e954607ffd500a05c8e634064edfed2b1e344c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

