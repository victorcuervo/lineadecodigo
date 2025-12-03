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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOS2P4Y2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFJulP2RDfEPjQik1ZES7uzWnBR8v2j1GsYn1UhbmN5NAiAdzuro3jcYTd4T64qQgQ%2Fg11CHNbSPjU6rEuV%2Fpn%2FAsir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMfoOgnrTRFxNPBuRdKtwDf%2BzYIKtJwt14SB%2FhSPzacoGYtHYgp%2BMBJvg1et7XMOrOyK%2FP8Vo42xL0QdMwNuK3CpZN5vJ6zZw4%2FDNqHfBiqJYyRjjYUID3JrGDsLCD6kcV6NpVIvSP6nQpMF7QJ%2BfkUKhhGankBafERby7qexqNg%2BAcyOQTYeshEAOwJ%2FHyUpdtqV8jTByuo%2FMTF0awVmAzm7TMODaxWFRKdU%2BJ5xbixfpBm%2FB1XvH0lRyZbXUMkzAC0vlcYVsaZyv19cAUPPlwm%2Blld5LoSJnsDX3RElLDeFHlYuc%2Blm9eTMTp73MXpVRkvu%2FScsXljuO3rNMGVht%2F5WeDWgKNHwPWCFcqMBf25RLD4SeqZh%2BLeFurLSN0livLdbRHxLEqcMOxqkyuChiIOmvVDGh1M6vas9NB82g%2F1SJ53qTkCRBmvna8Pq43%2FYP2jJzk5wul1w9ZazHDbUWI8Bn8WSIwiHRrNCMgn8R%2Bpt1sClKsDJP0EBjXlSU%2FMnjV2r6CTBSRRjP7KeLkKKzgIF5kqFFTVIaoFMBni0%2B2IB9KQEOlCCooibvFtVoK%2FSjcW6XmLE7aUQ3juc6ohPM%2B48DRIUowMZSpSA3EzRq1JQizMM2ID5Y%2BUt%2F7dd5c10E3GEAbM240sw9OwUw65PAyQY6pgHz0JtePG7e9mD0gvXhzx6KTjIBngF0I1wkLYMP9NAso43WPJfyYNRC1R8dx8qIBFqFb4%2BKcOrqYsrfNrvO%2BwgC4kD32YXP%2Fo8pWBAd0YCvZE09xmEuN8Lpf%2BHvaw581jfkKBvQH1YFJAu84O6EmDVA1rHnUSu%2Bm4MlgbioQ0yux4SiHIxTaztaGq7PsSJRjhEqj4l6Lwy8aXfGHc7KKyckBlQ8d0dr&X-Amz-Signature=6b1aa1239617d8c67f1086e4d9f5021f061db6c3768007fdd06805350c34f38e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOS2P4Y2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFJulP2RDfEPjQik1ZES7uzWnBR8v2j1GsYn1UhbmN5NAiAdzuro3jcYTd4T64qQgQ%2Fg11CHNbSPjU6rEuV%2Fpn%2FAsir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMfoOgnrTRFxNPBuRdKtwDf%2BzYIKtJwt14SB%2FhSPzacoGYtHYgp%2BMBJvg1et7XMOrOyK%2FP8Vo42xL0QdMwNuK3CpZN5vJ6zZw4%2FDNqHfBiqJYyRjjYUID3JrGDsLCD6kcV6NpVIvSP6nQpMF7QJ%2BfkUKhhGankBafERby7qexqNg%2BAcyOQTYeshEAOwJ%2FHyUpdtqV8jTByuo%2FMTF0awVmAzm7TMODaxWFRKdU%2BJ5xbixfpBm%2FB1XvH0lRyZbXUMkzAC0vlcYVsaZyv19cAUPPlwm%2Blld5LoSJnsDX3RElLDeFHlYuc%2Blm9eTMTp73MXpVRkvu%2FScsXljuO3rNMGVht%2F5WeDWgKNHwPWCFcqMBf25RLD4SeqZh%2BLeFurLSN0livLdbRHxLEqcMOxqkyuChiIOmvVDGh1M6vas9NB82g%2F1SJ53qTkCRBmvna8Pq43%2FYP2jJzk5wul1w9ZazHDbUWI8Bn8WSIwiHRrNCMgn8R%2Bpt1sClKsDJP0EBjXlSU%2FMnjV2r6CTBSRRjP7KeLkKKzgIF5kqFFTVIaoFMBni0%2B2IB9KQEOlCCooibvFtVoK%2FSjcW6XmLE7aUQ3juc6ohPM%2B48DRIUowMZSpSA3EzRq1JQizMM2ID5Y%2BUt%2F7dd5c10E3GEAbM240sw9OwUw65PAyQY6pgHz0JtePG7e9mD0gvXhzx6KTjIBngF0I1wkLYMP9NAso43WPJfyYNRC1R8dx8qIBFqFb4%2BKcOrqYsrfNrvO%2BwgC4kD32YXP%2Fo8pWBAd0YCvZE09xmEuN8Lpf%2BHvaw581jfkKBvQH1YFJAu84O6EmDVA1rHnUSu%2Bm4MlgbioQ0yux4SiHIxTaztaGq7PsSJRjhEqj4l6Lwy8aXfGHc7KKyckBlQ8d0dr&X-Amz-Signature=d66730797647f265de9d937fae40977dd4829a65de9aeba63729375ca42b9b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

