---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WVTC6WD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEE97iMGsYNRgRYOtsMIfKIJWm%2BhLcTPY724oxf6Q02ZAiEArvH5ddJK5WL3eOOKZRATNAvxuh3GwAMDvVQ3SCIFtiUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKNC9DpJ1nsha6Yt3SrcA7ZWxPRNbzNhVi8ogTngs48bZj8kOE3xP50VLScPTDvWk9VFqMboTe2IpN2%2B8LGaY%2BR13r%2BLNrzFCUAyZ2RDpxxKopX%2B8mVY9ue56JK9CahEbsGhwbEVqZ%2FbKNj5hAK5HQMkEkMSBi%2BJn%2BDC8HEnfBSS8M1gQzwOeLl%2FjzfWEWfXYxZHHTZ2emqWhELeQALbTu6EEcRRDu9apbekXbSy3nsip5iZD16d7bSWFRk7Z4mqBLd%2FSmYdLDxveADJM3SArX8GlkXyZ2qWtpzC1BhCv2k7hayg8Tl9zEygF4jxdEHDgnzcoz%2Fe%2FfDnPYErfKgTbG8SR4M58%2Fjnl2Qay2erU2bhqovKO5ysP5qWXsRHwykGFtoCT%2B9U%2F3AVctmgboZiuH5QjPPY8Lmqv4we9QpdNqhuwAzqF4K%2F9CKV6mX6bWTsSB16aJojj%2FkZ8HBiuwA9zgRYdKA%2FJEVdhuj39w%2FoyMfiMsvaImmrHSH8dggzBX7gm5Mx8DjWQ7cEhPFVfkpHFvTVu67c1lR5H6h2LAwYgTcuL64LTeEuC%2BvfaSyb2pSIvKs3IM3Ygd%2FyjP0Yq%2BsLRq0i20onadzNDOxxznsW2DYeq%2BOCyzjdSB8YjyW1A9YKZePqp30I5Xf6pGb2MKLqy8kGOqUBzRn5ooMUxaB3dzHJMCiMMfOFKaPHBycN5cSnihcuoK6R8kztqehSEVpRe8R8OsoSu88oNFp%2BILs81RipB8XGXH2N7uBuHZRa6HZt5odmgsWW6pAYX%2F90xZ6xujaksDeKEiVw0ZMTEN0x76crXQZDeILyFatfqAaPOcpSlrQcRrQcfnRGxCGjopTuK0dTyGhIpyaQY4St0njYrUQW0tEJNYTro9zb&X-Amz-Signature=3fe778eba416e073d9ca09d53b88e38139e5282ac3c8b8be02a882cf4ccefa8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WVTC6WD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEE97iMGsYNRgRYOtsMIfKIJWm%2BhLcTPY724oxf6Q02ZAiEArvH5ddJK5WL3eOOKZRATNAvxuh3GwAMDvVQ3SCIFtiUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKNC9DpJ1nsha6Yt3SrcA7ZWxPRNbzNhVi8ogTngs48bZj8kOE3xP50VLScPTDvWk9VFqMboTe2IpN2%2B8LGaY%2BR13r%2BLNrzFCUAyZ2RDpxxKopX%2B8mVY9ue56JK9CahEbsGhwbEVqZ%2FbKNj5hAK5HQMkEkMSBi%2BJn%2BDC8HEnfBSS8M1gQzwOeLl%2FjzfWEWfXYxZHHTZ2emqWhELeQALbTu6EEcRRDu9apbekXbSy3nsip5iZD16d7bSWFRk7Z4mqBLd%2FSmYdLDxveADJM3SArX8GlkXyZ2qWtpzC1BhCv2k7hayg8Tl9zEygF4jxdEHDgnzcoz%2Fe%2FfDnPYErfKgTbG8SR4M58%2Fjnl2Qay2erU2bhqovKO5ysP5qWXsRHwykGFtoCT%2B9U%2F3AVctmgboZiuH5QjPPY8Lmqv4we9QpdNqhuwAzqF4K%2F9CKV6mX6bWTsSB16aJojj%2FkZ8HBiuwA9zgRYdKA%2FJEVdhuj39w%2FoyMfiMsvaImmrHSH8dggzBX7gm5Mx8DjWQ7cEhPFVfkpHFvTVu67c1lR5H6h2LAwYgTcuL64LTeEuC%2BvfaSyb2pSIvKs3IM3Ygd%2FyjP0Yq%2BsLRq0i20onadzNDOxxznsW2DYeq%2BOCyzjdSB8YjyW1A9YKZePqp30I5Xf6pGb2MKLqy8kGOqUBzRn5ooMUxaB3dzHJMCiMMfOFKaPHBycN5cSnihcuoK6R8kztqehSEVpRe8R8OsoSu88oNFp%2BILs81RipB8XGXH2N7uBuHZRa6HZt5odmgsWW6pAYX%2F90xZ6xujaksDeKEiVw0ZMTEN0x76crXQZDeILyFatfqAaPOcpSlrQcRrQcfnRGxCGjopTuK0dTyGhIpyaQY4St0njYrUQW0tEJNYTro9zb&X-Amz-Signature=46f60e87a2b5802b45f559a5ec2b53fd8f188c1a93827d8ccd58c2e26aad104a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

