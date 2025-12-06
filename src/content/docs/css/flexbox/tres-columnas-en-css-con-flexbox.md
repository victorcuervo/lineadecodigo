---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OTPMDYO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEH4q8b%2BsLWOO0yN8Pq9EQy7rPqKyo%2By3C%2BcU8cSdnkQIhAMm%2B1sS6G3X%2FxKi18Uk%2FVPpV42eWeqEGTlLH%2Fo5BpbVyKv8DCHUQABoMNjM3NDIzMTgzODA1IgzpZ4Wrus6p1DF6sZcq3AM%2FSggpdR9JAzMzCMgVJMl38Axj1yH4NRWlSK8IaAGEXR0iBPppinwa2N2zknnMcZyeqTyCNjz0I3foRRkEqBCzh%2FVfX2rA3imnCpgxG3DkWEXjIsBRXrpZFZ%2BYcZGas5XpKIp2XcdKJv0zrPySccxMc43r0mPXYsqGvECGwDh%2BTHYc6zZTtH3113l5N8TCGJSmUKkT%2BKqtzFmiHP0rWkGAThFdLB8B5svh73PVhezRSWAwOCEOpz4plRziVTQKW%2Fdz0Ap8gaHTHRdqRcsrKl1V5kliJ35e6Q7lz3WuheVDr2Sl77Dlid4NlLFQeou0bmD8KE4JuCWVmw8Dt8%2FesjpiWCSBZvhrSidQVNB1n8tr8kCi0BEq9WExcYVdEIYtZ8NXNYUX7bPW4FYE2vFrTZqtEJFA1oLILDR1VV1%2FdN1Dv8ZGANgTtXQRaIhtlEwiOQnr6uJrUa3A5QFOal9j7ZVQrXnuVssKWENM4UecUUNie1zGd%2FRH5hbvBQTWmyKbVPR1%2BufWwmqCIQdL8B3m6Eu2oDEftDirDP4gbUIVm4y6yOgOO8ss2BBbqGkKpwkRmdif2ljya7NX7VwAfdpnelGrD7sgOnTwqCXiJSgpa97ZkszqkS1SrIpkKNsE3TDPptDJBjqkAQtghV4EAypYmFxvlWGbZxCtEXAAWu79zmwhtKI%2BSyUwzwhe5QVLirSttu1wb5fN%2F76jWDhQmdRfWvVLp5451HRoc2lAyQKnWzMOkgWwmxqu5RxsE1gQRoGn%2FHLFqnlfAcWhlzkzUypU4%2FHZxyFK4BDdEviUhFUyrmG0Ie8ndJNddbJeMKBjeEiE%2FLCU5cVAQQSRsHS9yCO6uQmZ9DgF8bIj7Ix%2F&X-Amz-Signature=34aca6be58072f7a0eb84c09c9d1a010a5fa0e6197a0db17477d0e54030876e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OTPMDYO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEH4q8b%2BsLWOO0yN8Pq9EQy7rPqKyo%2By3C%2BcU8cSdnkQIhAMm%2B1sS6G3X%2FxKi18Uk%2FVPpV42eWeqEGTlLH%2Fo5BpbVyKv8DCHUQABoMNjM3NDIzMTgzODA1IgzpZ4Wrus6p1DF6sZcq3AM%2FSggpdR9JAzMzCMgVJMl38Axj1yH4NRWlSK8IaAGEXR0iBPppinwa2N2zknnMcZyeqTyCNjz0I3foRRkEqBCzh%2FVfX2rA3imnCpgxG3DkWEXjIsBRXrpZFZ%2BYcZGas5XpKIp2XcdKJv0zrPySccxMc43r0mPXYsqGvECGwDh%2BTHYc6zZTtH3113l5N8TCGJSmUKkT%2BKqtzFmiHP0rWkGAThFdLB8B5svh73PVhezRSWAwOCEOpz4plRziVTQKW%2Fdz0Ap8gaHTHRdqRcsrKl1V5kliJ35e6Q7lz3WuheVDr2Sl77Dlid4NlLFQeou0bmD8KE4JuCWVmw8Dt8%2FesjpiWCSBZvhrSidQVNB1n8tr8kCi0BEq9WExcYVdEIYtZ8NXNYUX7bPW4FYE2vFrTZqtEJFA1oLILDR1VV1%2FdN1Dv8ZGANgTtXQRaIhtlEwiOQnr6uJrUa3A5QFOal9j7ZVQrXnuVssKWENM4UecUUNie1zGd%2FRH5hbvBQTWmyKbVPR1%2BufWwmqCIQdL8B3m6Eu2oDEftDirDP4gbUIVm4y6yOgOO8ss2BBbqGkKpwkRmdif2ljya7NX7VwAfdpnelGrD7sgOnTwqCXiJSgpa97ZkszqkS1SrIpkKNsE3TDPptDJBjqkAQtghV4EAypYmFxvlWGbZxCtEXAAWu79zmwhtKI%2BSyUwzwhe5QVLirSttu1wb5fN%2F76jWDhQmdRfWvVLp5451HRoc2lAyQKnWzMOkgWwmxqu5RxsE1gQRoGn%2FHLFqnlfAcWhlzkzUypU4%2FHZxyFK4BDdEviUhFUyrmG0Ie8ndJNddbJeMKBjeEiE%2FLCU5cVAQQSRsHS9yCO6uQmZ9DgF8bIj7Ix%2F&X-Amz-Signature=350cdb5f69c10a75a71f576c3695cac4b0e3222157496f017af09a5da0162c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

