---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666IGNSK3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6a7uxIX%2FYkmnzZ%2FUmpbg5hL1vqT6DsrLdNYSppL4sbgIhAM583gVcavuGSbx8YwILSdMExlbp9X479WdE0lVh6uryKv8DCG8QABoMNjM3NDIzMTgzODA1IgyXpAIY%2BhZSUOR8VgUq3AO3zp9Wv5Hj8barEjEBd0kjw3c%2BW3TBuBKqeAVaynRfM529ZEMHf3qSj%2FFl%2BYJdNJ4qH6T9eV1uRCxFri%2F40HJ2dzJ33CRbVTpKMgLKE%2BqqYe8jWKkWmsR9sD7cG566VYEHNuG7KdXTvPoulxsbGTiI9ht7mrtwDgmuxHzCqMHWx%2BUfmHRIkhIVzhwVuwe7H8vUORgvSxhvQv6cbPrgkBhsMZI3K0PR%2FVaNeCuFzICCMzropMPL0rQaaViyB1qx8Z7iE8qzvfeQSozK8U5Xh9%2BjXN9d%2FsyLhwbsR9nG%2F1fyKCyhN2yKraiyV%2BH%2FVYjDlfu11mA5eVI8aW1ak1A2s8CMU6iyShFqlhWxdSgUu63yihOmPirbXPORIhiu0HPi9hZfdS5w6P9oPiZOxNV859lGGMFPlZhLbV9B4jf6M%2B8Np9I7321yiKNzWZTey5JSJvX676QCpgscbnMTScuexhFssADbJRMxQe9Pg6nxyCM4HEOLZ7YxFxduqniIIMRbh7ZW7sS383Y6fsjZpLdaxT6WzYRWKXHxukERUj7DlTJhnoesDjSaPNTmob7%2F8tiz84mK%2BIC2C8f5BzM6REuY7fDd4PZJHMabwN8sMM97R%2FTM1%2FucEJ0rcNPMYUaO6TDV%2FM7JBjqkAadLN%2B61nzOyqOrGFPJ13sgPQShcrtuyDARHcj7uUixU1Hn9ZTExqSNSRyneh8x2z1sV1wrghHDDgghJnIAXVeU1%2B%2F6dNRdlWYs7e7bbdJ3s8ThzRC2sldCVKYdifFovENyfwsp2coja05%2B0n45XDqJrs7c1O5qBf4NQeTWKauoB%2Bt1iPyUt17GZj3o1zlj4u%2BZjEEZAMcqH3Mu98k4AOc2XLjTI&X-Amz-Signature=b5143c93641e239c40efa76b6da55da67ac1d9b7c13c9575d814a20fdc041cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666IGNSK3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6a7uxIX%2FYkmnzZ%2FUmpbg5hL1vqT6DsrLdNYSppL4sbgIhAM583gVcavuGSbx8YwILSdMExlbp9X479WdE0lVh6uryKv8DCG8QABoMNjM3NDIzMTgzODA1IgyXpAIY%2BhZSUOR8VgUq3AO3zp9Wv5Hj8barEjEBd0kjw3c%2BW3TBuBKqeAVaynRfM529ZEMHf3qSj%2FFl%2BYJdNJ4qH6T9eV1uRCxFri%2F40HJ2dzJ33CRbVTpKMgLKE%2BqqYe8jWKkWmsR9sD7cG566VYEHNuG7KdXTvPoulxsbGTiI9ht7mrtwDgmuxHzCqMHWx%2BUfmHRIkhIVzhwVuwe7H8vUORgvSxhvQv6cbPrgkBhsMZI3K0PR%2FVaNeCuFzICCMzropMPL0rQaaViyB1qx8Z7iE8qzvfeQSozK8U5Xh9%2BjXN9d%2FsyLhwbsR9nG%2F1fyKCyhN2yKraiyV%2BH%2FVYjDlfu11mA5eVI8aW1ak1A2s8CMU6iyShFqlhWxdSgUu63yihOmPirbXPORIhiu0HPi9hZfdS5w6P9oPiZOxNV859lGGMFPlZhLbV9B4jf6M%2B8Np9I7321yiKNzWZTey5JSJvX676QCpgscbnMTScuexhFssADbJRMxQe9Pg6nxyCM4HEOLZ7YxFxduqniIIMRbh7ZW7sS383Y6fsjZpLdaxT6WzYRWKXHxukERUj7DlTJhnoesDjSaPNTmob7%2F8tiz84mK%2BIC2C8f5BzM6REuY7fDd4PZJHMabwN8sMM97R%2FTM1%2FucEJ0rcNPMYUaO6TDV%2FM7JBjqkAadLN%2B61nzOyqOrGFPJ13sgPQShcrtuyDARHcj7uUixU1Hn9ZTExqSNSRyneh8x2z1sV1wrghHDDgghJnIAXVeU1%2B%2F6dNRdlWYs7e7bbdJ3s8ThzRC2sldCVKYdifFovENyfwsp2coja05%2B0n45XDqJrs7c1O5qBf4NQeTWKauoB%2Bt1iPyUt17GZj3o1zlj4u%2BZjEEZAMcqH3Mu98k4AOc2XLjTI&X-Amz-Signature=c23be54faf00402f2ad3854464b900d1721c4adbcdbdf83b5dfa2c0b9ec453be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

