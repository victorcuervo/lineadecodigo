---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJNS4LA5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIu6bVnk870cJ2%2BPKQN1Wlan6fXvUniaWNy5Lm%2BHqEawIhAPjIpGCtSlgLZUD4K%2FsotaRFD9QuXPtrVOXyyuO30hdTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMLtGL7G0hKSpRZ0Mq3AMza8bw8dS%2FJh1mL2UwCv2cYvNpkybp1BPqiY3fCfvkQKtMa7j0vVXihDsPclUobrSyu3gCTEviwkNr05UH7%2FG9JHtiN%2BAOD1GvDFfzukxB7iFxPY2m8qTvBoPv0u15uYcfzdbMSoTRUkaVJ849GQ%2FPQmW6j6%2FkfdvmKlHENVJpqc%2B%2FoBA3%2Bwr3hPRAXCTjwdfCprTB0R%2BhLfZrOJrScWsuuZpPM2xHilR8Nfgv0soa%2FChd5gLmhcO2cCpxffMCeSGZHcFqdGcP0oAnbEoNqfGjQd4GQ45O7bJ17MEhzbdisYTe0IMIMpONXlgQpD%2Fg3KGltOmpDwf%2FIR7ZuKaNx7CcSKfqmfsKsIm2a3u0TU4FrkwTk%2Fu0PLRWT2DRjPJKgw3SgQWwusaawd%2BrGdhKPRRK%2B6F%2FAkFZ0MVfYGM1JdokR9EIxCoUJx6DxbzA3Hv7nP9qoKDgYQ9n9BgmJqRhA3jdzrsvacoc0lLxQE%2BXF0%2FfEabWIsegqouVuMRjy6i5itM7QO6Ih5M4KX7pLbslStNAEE5yKZdBqX5NdfPLlawCUl9TJD0bbIeO7HP0XiuUz8pR8oJqwA3qcgWdtD%2F7MHYudYDycTCKIu3maBOWO2Lm%2BrtUidU0jNydBi44lTCNw93JBjqkARoX1NwTjGzCJYoziO07dWJHRF4vce523iKpM7w0l8X7FpGlpsDL8t23VDlSrkicU21n0IkK67eSG7pyEqqeyBheG8zvjGZuxUTPrAOm%2F%2BM2ZIbk5WiqA%2B5vabYOvUQ5SBLV5bczcXsfnaiKHK3vVhC6yzpm8rIYC3q1pi0RL2WiX3hpGmFfMd97WBWwlzX6QdnDRkK%2BQxEw0nU9NIgSugNFtaQ3&X-Amz-Signature=c0c24241b6eb7e4a20af2d29b37787f0dfeeb814b16862b40bd8c5b5f0a38179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJNS4LA5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIu6bVnk870cJ2%2BPKQN1Wlan6fXvUniaWNy5Lm%2BHqEawIhAPjIpGCtSlgLZUD4K%2FsotaRFD9QuXPtrVOXyyuO30hdTKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMLtGL7G0hKSpRZ0Mq3AMza8bw8dS%2FJh1mL2UwCv2cYvNpkybp1BPqiY3fCfvkQKtMa7j0vVXihDsPclUobrSyu3gCTEviwkNr05UH7%2FG9JHtiN%2BAOD1GvDFfzukxB7iFxPY2m8qTvBoPv0u15uYcfzdbMSoTRUkaVJ849GQ%2FPQmW6j6%2FkfdvmKlHENVJpqc%2B%2FoBA3%2Bwr3hPRAXCTjwdfCprTB0R%2BhLfZrOJrScWsuuZpPM2xHilR8Nfgv0soa%2FChd5gLmhcO2cCpxffMCeSGZHcFqdGcP0oAnbEoNqfGjQd4GQ45O7bJ17MEhzbdisYTe0IMIMpONXlgQpD%2Fg3KGltOmpDwf%2FIR7ZuKaNx7CcSKfqmfsKsIm2a3u0TU4FrkwTk%2Fu0PLRWT2DRjPJKgw3SgQWwusaawd%2BrGdhKPRRK%2B6F%2FAkFZ0MVfYGM1JdokR9EIxCoUJx6DxbzA3Hv7nP9qoKDgYQ9n9BgmJqRhA3jdzrsvacoc0lLxQE%2BXF0%2FfEabWIsegqouVuMRjy6i5itM7QO6Ih5M4KX7pLbslStNAEE5yKZdBqX5NdfPLlawCUl9TJD0bbIeO7HP0XiuUz8pR8oJqwA3qcgWdtD%2F7MHYudYDycTCKIu3maBOWO2Lm%2BrtUidU0jNydBi44lTCNw93JBjqkARoX1NwTjGzCJYoziO07dWJHRF4vce523iKpM7w0l8X7FpGlpsDL8t23VDlSrkicU21n0IkK67eSG7pyEqqeyBheG8zvjGZuxUTPrAOm%2F%2BM2ZIbk5WiqA%2B5vabYOvUQ5SBLV5bczcXsfnaiKHK3vVhC6yzpm8rIYC3q1pi0RL2WiX3hpGmFfMd97WBWwlzX6QdnDRkK%2BQxEw0nU9NIgSugNFtaQ3&X-Amz-Signature=c656f424eb0b73b368f36228c4009a4556c2665b238c9916e7aa391354deb70c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

