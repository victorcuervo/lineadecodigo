---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JT5P4MS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIXiv1LpQqDmQ6f1DFtS5kWaA%2Bo5q%2Brs1i4oy5%2F0aXMAiEA9btAc%2FOHeHUwVDegDbZhrWHdgVzm9oDDuqXQw%2B2n4C8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSJdI6UY%2BVvPZpVKSrcA3YK4pdDuhX98NpgADk1%2Bl8V3uayyPNXquZ781PL5P8JAieyYQjE63MdH%2BMNaJ5RtDpIm490vSCJarLj3pgaRqYlKngOLtvO%2F9wFWImQV4hoQaB0fTy6o6AhcySX6Gsxk7N7yLmJT5QFD7lU1ZQRt6PDQisQWPtkouBXSJ%2FuLOqqwqi22vR0XSMu1iYBULeSQEQfQqdYHK7vZvOBGQL7wokOzyV%2Bdwvl0RCUyIO5%2FgLVt%2FwkPIO5g5cUzymOniR8tYHtHNthnR9%2FpqT8%2FwRXXcKOIyhKcGzimNVEEF%2Br%2Fom4Alw%2BWKavza7emxwAXrOOhxJvTxJ70GGNjte%2BrPfZWK2mCSEwvozdzYAuvzCh6D5j7ScBHFOoLb%2Fuba7fmOf23tDZYOCih%2FfeoSxCS7NdmPT%2By%2BnXOjvespsEdOcsQg1hu%2B1SFr6P0qq7zjQRJmbYjui4BniVL5cA2u5axE9Uft5Xrb%2FqcQ9QjvuLaAEP0%2FKKEs3vaEDkz2ZiX%2FscDJ7l1RzadYqDrP7Fj6nPLEAqXAEKjJNbNb4gt2VDAVBRCG2lHO7EQo8Z4ICpQcVxvihA8jxHE4jQUr1wz0cB4xDDN4aLY5I%2F80IQkOhgxiZvETBK6S%2F%2FSDY1ZeofQBhTMK7%2B0skGOqUB%2F9gqqYvqg3Wa327McEUkJGSwsWND9r4VXk9lAsEeWivL0ryzhS8hvDlt5cJexvmSEpI0IPIAfHWjF6bbFPJ%2Fk8JTImqBKVCX8R34CfZkiZjNK6nWUuvHK2gaz9FGUQmhUb3tgL9WDSTk5K0Er8RpYviaE3DiKWeAZ2sJFzFxa5%2BikH9tzodjIo%2Buy1oZxnYY6asSgoqyf9ECcQYqnHxVmLJvlylx&X-Amz-Signature=30aaaab06a394d889d873a6cdd5b7d6044f11f646aae877dc0e7c52f84f42394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JT5P4MS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIXiv1LpQqDmQ6f1DFtS5kWaA%2Bo5q%2Brs1i4oy5%2F0aXMAiEA9btAc%2FOHeHUwVDegDbZhrWHdgVzm9oDDuqXQw%2B2n4C8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSJdI6UY%2BVvPZpVKSrcA3YK4pdDuhX98NpgADk1%2Bl8V3uayyPNXquZ781PL5P8JAieyYQjE63MdH%2BMNaJ5RtDpIm490vSCJarLj3pgaRqYlKngOLtvO%2F9wFWImQV4hoQaB0fTy6o6AhcySX6Gsxk7N7yLmJT5QFD7lU1ZQRt6PDQisQWPtkouBXSJ%2FuLOqqwqi22vR0XSMu1iYBULeSQEQfQqdYHK7vZvOBGQL7wokOzyV%2Bdwvl0RCUyIO5%2FgLVt%2FwkPIO5g5cUzymOniR8tYHtHNthnR9%2FpqT8%2FwRXXcKOIyhKcGzimNVEEF%2Br%2Fom4Alw%2BWKavza7emxwAXrOOhxJvTxJ70GGNjte%2BrPfZWK2mCSEwvozdzYAuvzCh6D5j7ScBHFOoLb%2Fuba7fmOf23tDZYOCih%2FfeoSxCS7NdmPT%2By%2BnXOjvespsEdOcsQg1hu%2B1SFr6P0qq7zjQRJmbYjui4BniVL5cA2u5axE9Uft5Xrb%2FqcQ9QjvuLaAEP0%2FKKEs3vaEDkz2ZiX%2FscDJ7l1RzadYqDrP7Fj6nPLEAqXAEKjJNbNb4gt2VDAVBRCG2lHO7EQo8Z4ICpQcVxvihA8jxHE4jQUr1wz0cB4xDDN4aLY5I%2F80IQkOhgxiZvETBK6S%2F%2FSDY1ZeofQBhTMK7%2B0skGOqUB%2F9gqqYvqg3Wa327McEUkJGSwsWND9r4VXk9lAsEeWivL0ryzhS8hvDlt5cJexvmSEpI0IPIAfHWjF6bbFPJ%2Fk8JTImqBKVCX8R34CfZkiZjNK6nWUuvHK2gaz9FGUQmhUb3tgL9WDSTk5K0Er8RpYviaE3DiKWeAZ2sJFzFxa5%2BikH9tzodjIo%2Buy1oZxnYY6asSgoqyf9ECcQYqnHxVmLJvlylx&X-Amz-Signature=3205981fd012f3723d179c650d9a26b26c0fcea216c7bb351f0e014d95ea0b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

