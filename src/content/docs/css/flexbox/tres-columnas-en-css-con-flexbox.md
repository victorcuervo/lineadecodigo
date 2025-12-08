---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSNXNXHY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJh7NLYxN%2FumsOnI%2Bm6z42IjE4okkJZdltxfm2TE7GzwIgB58b468BRF%2F76Qc0%2F4cJlUNxnX2n6rTamzmLXW4ansgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKECrygpc1oKKmvQ4ircA0eNOQmh99q7kJD08h4HH%2Fgu1PGcvDk%2FhtVqrGrvWlI9hLMlAsefJpWE3czOAtWs3bg4Se9kQMrLIGhd%2FvfSRkOr6bJinvJgUNJI0TSZc7gxyp9U3KlejYm3ivmxm3FWaljIdgMpzNhcRq7uz2Jgq6x9bRyLKWZgAbTy2h%2FUgTvHwFy6rN%2BgD7VSsmd8kdzjlY9lL6f79%2BMUjVQRy47KNKVaVEZMlrPLLig5MMEEbgR4YlPza%2B0upIqHHrwv48kG%2FZ9JZjfOSbhP5zLangpPDcOmM%2BGvjkNAZlQwwF6tNPQAkU5eH5D6E%2FCsNqBuTt8asSqi%2FlPH7or3WE70gsQPUFDMJhJXmogmtj3Vnt%2BR7SxHw2k2jJrljaD8cqfYu54fT0SDCGY0mjAlqiU6tcD%2BZUhsal7drcME%2FmL%2Bc2nXKYYEgP34ktWs7ZIsuY6nqGoLAzE7lEJgrpVElQ1b981YALX4Vp3u9NAcUJLarS%2BhXdXQmi5luJjWp4KJIrgkzwKTfvuMj1ureR0QbSUDkfwLtkfRESio05FCYFclCOVALjlwVlmP7q6p4YKxE3THCV%2FcYj5NIneaW8LYE7%2B1mE26mlTk4hf8rflSmPpll1TVr7pIV7boFAMun%2B5NIuXNMM702skGOqUBSCQ%2FYCi0Ob2EBz7TmjsIjP8Im80jQwJKM1459De3F9AW0ZrmHfHFYu1rdoirrZj7oiUBHzVavh7ixrN%2FEn5cpsceGN3hh%2BJIy%2F26HWNMQ6lbK32KmZiKCd6g9WlHd0bE3vRLpO6bamglhWUx5l%2F40XJap2fNHsHuOWbs9zmFhYtH0L7k4O1qqQoidEAtatoO0skUhe0cnmVcP6VE%2Fuc1oYQYLyxC&X-Amz-Signature=c620924983f4950f84024ddbe071f0c61115ff92a8b1d422437c8d6726cf6ed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSNXNXHY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJh7NLYxN%2FumsOnI%2Bm6z42IjE4okkJZdltxfm2TE7GzwIgB58b468BRF%2F76Qc0%2F4cJlUNxnX2n6rTamzmLXW4ansgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKECrygpc1oKKmvQ4ircA0eNOQmh99q7kJD08h4HH%2Fgu1PGcvDk%2FhtVqrGrvWlI9hLMlAsefJpWE3czOAtWs3bg4Se9kQMrLIGhd%2FvfSRkOr6bJinvJgUNJI0TSZc7gxyp9U3KlejYm3ivmxm3FWaljIdgMpzNhcRq7uz2Jgq6x9bRyLKWZgAbTy2h%2FUgTvHwFy6rN%2BgD7VSsmd8kdzjlY9lL6f79%2BMUjVQRy47KNKVaVEZMlrPLLig5MMEEbgR4YlPza%2B0upIqHHrwv48kG%2FZ9JZjfOSbhP5zLangpPDcOmM%2BGvjkNAZlQwwF6tNPQAkU5eH5D6E%2FCsNqBuTt8asSqi%2FlPH7or3WE70gsQPUFDMJhJXmogmtj3Vnt%2BR7SxHw2k2jJrljaD8cqfYu54fT0SDCGY0mjAlqiU6tcD%2BZUhsal7drcME%2FmL%2Bc2nXKYYEgP34ktWs7ZIsuY6nqGoLAzE7lEJgrpVElQ1b981YALX4Vp3u9NAcUJLarS%2BhXdXQmi5luJjWp4KJIrgkzwKTfvuMj1ureR0QbSUDkfwLtkfRESio05FCYFclCOVALjlwVlmP7q6p4YKxE3THCV%2FcYj5NIneaW8LYE7%2B1mE26mlTk4hf8rflSmPpll1TVr7pIV7boFAMun%2B5NIuXNMM702skGOqUBSCQ%2FYCi0Ob2EBz7TmjsIjP8Im80jQwJKM1459De3F9AW0ZrmHfHFYu1rdoirrZj7oiUBHzVavh7ixrN%2FEn5cpsceGN3hh%2BJIy%2F26HWNMQ6lbK32KmZiKCd6g9WlHd0bE3vRLpO6bamglhWUx5l%2F40XJap2fNHsHuOWbs9zmFhYtH0L7k4O1qqQoidEAtatoO0skUhe0cnmVcP6VE%2Fuc1oYQYLyxC&X-Amz-Signature=8c7194a4a4feadee81fd4b5387a515c5183cf90370e010a9238d59b5f3c09049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

