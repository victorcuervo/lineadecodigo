---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QA4L6CL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2pJR4knYdDUojtM%2FN3PRhTs08GOtrkEGGg6TasvjPFAiEA4WYWF6zQ4zOXoBvbooshKhivEz6Vf5aBNExEd77li04qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIQvGX7E2wZ%2FfP%2FcyrcA1cERBQglK3lGid1W%2F279qBaXPIE0n1QMnmetgpn9l7cIqAAhS%2B3PYmQxthxYdLkmLqYpzQ5e5T1ZLScNhViyzPNatpvCI5QNfSlinAYYcOWkPfRxDrk65bSY%2BVaBZh3VxUB0p23Qs0fm7h6Z2aKR9lXz2tjApK6t1twxQ3TbusK6vcVlC%2BHPum2VaSHqD4VciJhPgjYdvWOG43ylyarYxcWWQFKxOHoQ8Gj5PTN%2F5Etb%2FpuDNoenTQtLcyt%2BvxVkmbdel0WGsPTwclAJdF6NbQvA40TbwZHJlXKE5jUlxE5t3XEaM8EfiyoJ%2FcushFln4l%2BAwm0l8qUK%2FKyIdE5YhTqW6O2qYa2PqlSqgwvheY7jjfMg8tCewdPC4Qx0Pn%2BnkbRcumgKYIhnJ9bvY1mrmnaQdK4jQf21A3TyFNbNo5zKsQlCtbttMx1fiW1j3TXGFW3q2qtjzi6UoLwydlYbc%2F0jsMuEgK9%2BOZtTmlpkqHuiGdKpdZTYTokzcfO%2FXHb%2BXNdzz0DF%2FPYiqUv6FwefjpA0%2BE2cZXaGbb1dr0dU9%2FEO4k7Q6QVV1u6rqdTOqWI%2BW4n8MTlrHtYcRGO68W8AYJFTR%2FqKpq8nVzaYv7m26%2FEX9jKN5hY9Hs6imHHML7E38kGOqUBcGaCYMjJABbs4kffU0Xlb06icNeKPnaUl3QT1mFVmcBHbK8PKHxi8uV4LDFphv%2BGCnMhyKGG5dlWjSaEGV2OeqQkE0RdiWMqR7TgDYpAYf3hwu1gpXhw4ZdkaG2A4ydbQEIqikxCD22mig%2FOBQ3dfPxpf0M1u2ZyI0URYHQJYWF5N52vZMn%2FEfVw%2B%2FKrgOOwZDnNAyvOkxvtdmGCPCEFtBptx9rq&X-Amz-Signature=6a2499e18f8b1fc9d53fea0835403c254f2db3d82822e376ff59a51fa4f92fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QA4L6CL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2pJR4knYdDUojtM%2FN3PRhTs08GOtrkEGGg6TasvjPFAiEA4WYWF6zQ4zOXoBvbooshKhivEz6Vf5aBNExEd77li04qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIQvGX7E2wZ%2FfP%2FcyrcA1cERBQglK3lGid1W%2F279qBaXPIE0n1QMnmetgpn9l7cIqAAhS%2B3PYmQxthxYdLkmLqYpzQ5e5T1ZLScNhViyzPNatpvCI5QNfSlinAYYcOWkPfRxDrk65bSY%2BVaBZh3VxUB0p23Qs0fm7h6Z2aKR9lXz2tjApK6t1twxQ3TbusK6vcVlC%2BHPum2VaSHqD4VciJhPgjYdvWOG43ylyarYxcWWQFKxOHoQ8Gj5PTN%2F5Etb%2FpuDNoenTQtLcyt%2BvxVkmbdel0WGsPTwclAJdF6NbQvA40TbwZHJlXKE5jUlxE5t3XEaM8EfiyoJ%2FcushFln4l%2BAwm0l8qUK%2FKyIdE5YhTqW6O2qYa2PqlSqgwvheY7jjfMg8tCewdPC4Qx0Pn%2BnkbRcumgKYIhnJ9bvY1mrmnaQdK4jQf21A3TyFNbNo5zKsQlCtbttMx1fiW1j3TXGFW3q2qtjzi6UoLwydlYbc%2F0jsMuEgK9%2BOZtTmlpkqHuiGdKpdZTYTokzcfO%2FXHb%2BXNdzz0DF%2FPYiqUv6FwefjpA0%2BE2cZXaGbb1dr0dU9%2FEO4k7Q6QVV1u6rqdTOqWI%2BW4n8MTlrHtYcRGO68W8AYJFTR%2FqKpq8nVzaYv7m26%2FEX9jKN5hY9Hs6imHHML7E38kGOqUBcGaCYMjJABbs4kffU0Xlb06icNeKPnaUl3QT1mFVmcBHbK8PKHxi8uV4LDFphv%2BGCnMhyKGG5dlWjSaEGV2OeqQkE0RdiWMqR7TgDYpAYf3hwu1gpXhw4ZdkaG2A4ydbQEIqikxCD22mig%2FOBQ3dfPxpf0M1u2ZyI0URYHQJYWF5N52vZMn%2FEfVw%2B%2FKrgOOwZDnNAyvOkxvtdmGCPCEFtBptx9rq&X-Amz-Signature=9d7a6f690f34d8594d3dbd7496f5a568b363f65ab80594f90308657b6f6d931c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

