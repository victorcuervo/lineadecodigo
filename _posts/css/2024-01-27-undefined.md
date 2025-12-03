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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMN6BL3T%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDN9kC3yXiysvX8CT%2Ff3sLSXHs6dJ61YfMD3j1pdEVZEAIgSa7SNcwmTDskjQDhQoQNAkCZDpW44TbKga4K0AfeTVYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBNYWw9Lu5EHnJ5n%2BSrcAw%2BeW98FNq0t07KgEUAa2ngRAVDZEdmuLiPqPpn7dMe9jVJuPGGqQaj4GmDviBSyWhELZltyk1NotC0sVyTArHiGU4dM1PaBrdr%2BZH4HbaCpaWDgmw0qNczG%2BOCfm%2BxkY2yWRm3ZvKC5P7VbELGwEu2Kgl4Q301ALPT2xODXjhpXnq6O1O98al2SekgjWPDG70U%2FvVHcjaYlKPOmM669jT%2BtWVrxzhJtT8EwSsaluBssscgcZM05ZoU%2F1b8Y7iRvYEA71iu78jDWxogV3BGLtWgozHOrKsQSaNPwNVmrFKDXtF5y%2FVf0wxzVh2jLwx6qvgMXvzahz99WCVFP5pzsPoLGUtZgNuxy8VsKi5HFmchAcI0BLzckla2DIUPG9n%2FtczZ3hGdChcLPcBJ1xLKX5ckc0uCP1AzYer7PXntZrxQB8U8I9eqChQc7UGiWLFJHT0CNSG5OEbr6oy2w055I8afPB7yWw8fo3d1uk4JgYdp%2BImYnsQez84%2FtTLrs%2BmcyL0qkcKfrSvN%2F4mdnk9b85HondZR7NkqjVSKQebBE857pRYIGCVmNfputd54D0q2zd1ATJ4Nip54XLaiT7Th9rPKpctcyCkJkKHFvrbzT8q90dcluOHv%2FEd%2F1l1EbMMmWvskGOqUBasGsN3G%2FmKLQiDVGIpo0xcLYxJQgkA9WqTqWYjqdY9oF0xZLardCzgV%2FW%2FCKGwbsd6bjER8ZRBawRstA1iyYc5KmrhAjfbXKx%2Flf%2BMr7GxEezP2VkpQW04d5nu%2BW16xLTliCicjWsHQD2n7ykEyfXCQtIhxu16kiiLjG91B4Ve3Efl0fWSJt%2FMbz%2FredD%2Buge6pAqsCBYz93YOJHQxnSuOREgEVt&X-Amz-Signature=9396ba45dcce25e300682d57ace8c05de36b2541d3748a5221c741b361597e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMN6BL3T%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDN9kC3yXiysvX8CT%2Ff3sLSXHs6dJ61YfMD3j1pdEVZEAIgSa7SNcwmTDskjQDhQoQNAkCZDpW44TbKga4K0AfeTVYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBNYWw9Lu5EHnJ5n%2BSrcAw%2BeW98FNq0t07KgEUAa2ngRAVDZEdmuLiPqPpn7dMe9jVJuPGGqQaj4GmDviBSyWhELZltyk1NotC0sVyTArHiGU4dM1PaBrdr%2BZH4HbaCpaWDgmw0qNczG%2BOCfm%2BxkY2yWRm3ZvKC5P7VbELGwEu2Kgl4Q301ALPT2xODXjhpXnq6O1O98al2SekgjWPDG70U%2FvVHcjaYlKPOmM669jT%2BtWVrxzhJtT8EwSsaluBssscgcZM05ZoU%2F1b8Y7iRvYEA71iu78jDWxogV3BGLtWgozHOrKsQSaNPwNVmrFKDXtF5y%2FVf0wxzVh2jLwx6qvgMXvzahz99WCVFP5pzsPoLGUtZgNuxy8VsKi5HFmchAcI0BLzckla2DIUPG9n%2FtczZ3hGdChcLPcBJ1xLKX5ckc0uCP1AzYer7PXntZrxQB8U8I9eqChQc7UGiWLFJHT0CNSG5OEbr6oy2w055I8afPB7yWw8fo3d1uk4JgYdp%2BImYnsQez84%2FtTLrs%2BmcyL0qkcKfrSvN%2F4mdnk9b85HondZR7NkqjVSKQebBE857pRYIGCVmNfputd54D0q2zd1ATJ4Nip54XLaiT7Th9rPKpctcyCkJkKHFvrbzT8q90dcluOHv%2FEd%2F1l1EbMMmWvskGOqUBasGsN3G%2FmKLQiDVGIpo0xcLYxJQgkA9WqTqWYjqdY9oF0xZLardCzgV%2FW%2FCKGwbsd6bjER8ZRBawRstA1iyYc5KmrhAjfbXKx%2Flf%2BMr7GxEezP2VkpQW04d5nu%2BW16xLTliCicjWsHQD2n7ykEyfXCQtIhxu16kiiLjG91B4Ve3Efl0fWSJt%2FMbz%2FredD%2Buge6pAqsCBYz93YOJHQxnSuOREgEVt&X-Amz-Signature=04afa4570655236dce93e390cae0cc69087cb88b3b7536fdeaf6ec6d31a41206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

