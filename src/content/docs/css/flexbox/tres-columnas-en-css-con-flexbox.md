---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7ZGT6C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4VkLHZpFflHih%2FNiAtExl6vJ07uaWK%2FclFoFURDQz%2FgIgFhrvS2KLq5BLH8lnnH7w5bRXA3XwXM2Ii2dPbCKn7rEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6at%2Fb1TjTW%2BsttGCrcAzGnwP8VEvm1oHUfHIZVRS1AIymLR8c86AxcWDFke2yp3F4DMPZO0gQeYtqTsAeXOH0sM77YBeNivc2hP0QxoLJfE7pUzY7J3GKKf%2Fxzd8TDFgKV1uIj0kdcs2abq1liIx7oKghryXLi4hx6QjgREtwoVx1F5jq5Du%2FnHavuRDoy3vd1GUW36yNUM90wAfU6Ri0z4Hpqhm6QrdNpJw0Mpto3e4ZuUQtKaZq6eR7jEMacWRLv1jyXGxVlOCeTfDRpjupHyWoU7p1cOKZoplNR4YbjEK6avQFBKIVdwL4uYv0ekd9jrXzoX8Mdd1%2BOgziDmiA6NuN7CmSAOYJQ8gdU7H5yJV6XE6WvO6bHaKOEHo5NgG9kqrTsr%2Fm8%2BXLIVoU0tnseg1Aqi5B4yYX%2FuOUh%2BNEPp94S4VU6IDPF5b3OREZuwaDyyd2Z6ygNgfnesiYYDWicXotAQCTRFuLQMqSRUwlVWy506a0k0T5JNDAXMkRO6DJx1jJSnMlvuY%2Fm51oabWHEXu7FtLTKQzL2MsGdPs3y%2BS9w82bqAgJ1LPw97sDuFkoiJA3X9vzR1r2QkvNg3hRaOUsmR4TzTzQE%2BrkBGVCgg2HxMTd6St2G0Lq%2FtCJGeX48Oxx2TYA%2BMPM2MK2Z1ckGOqUBkcYTdVu4h%2Bs3ZOEvCHh4QIkuXVU0wQcr2gT17yFEZMTAXuHWr65ZNaDJHb7LIkawdySwSBuXwGlAMEeycXvBYm2FfK%2FOGRH3AmfuqR5Nhqe7%2FdSYgtDLkw2QawroPB5sZs11QB2kHr35xiq8UBwzxrHI0t7Rp1qbPVHg%2Bot8VAgkOuXN2zj%2BHl8r8vS2BH%2B1s92TjIVFZr4XZ1fFz9%2F2oiHV05fL&X-Amz-Signature=7f55d34283b5f13476f4b2c90b38523b68fb984a3d8bd40dce128523922435c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7ZGT6C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4VkLHZpFflHih%2FNiAtExl6vJ07uaWK%2FclFoFURDQz%2FgIgFhrvS2KLq5BLH8lnnH7w5bRXA3XwXM2Ii2dPbCKn7rEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6at%2Fb1TjTW%2BsttGCrcAzGnwP8VEvm1oHUfHIZVRS1AIymLR8c86AxcWDFke2yp3F4DMPZO0gQeYtqTsAeXOH0sM77YBeNivc2hP0QxoLJfE7pUzY7J3GKKf%2Fxzd8TDFgKV1uIj0kdcs2abq1liIx7oKghryXLi4hx6QjgREtwoVx1F5jq5Du%2FnHavuRDoy3vd1GUW36yNUM90wAfU6Ri0z4Hpqhm6QrdNpJw0Mpto3e4ZuUQtKaZq6eR7jEMacWRLv1jyXGxVlOCeTfDRpjupHyWoU7p1cOKZoplNR4YbjEK6avQFBKIVdwL4uYv0ekd9jrXzoX8Mdd1%2BOgziDmiA6NuN7CmSAOYJQ8gdU7H5yJV6XE6WvO6bHaKOEHo5NgG9kqrTsr%2Fm8%2BXLIVoU0tnseg1Aqi5B4yYX%2FuOUh%2BNEPp94S4VU6IDPF5b3OREZuwaDyyd2Z6ygNgfnesiYYDWicXotAQCTRFuLQMqSRUwlVWy506a0k0T5JNDAXMkRO6DJx1jJSnMlvuY%2Fm51oabWHEXu7FtLTKQzL2MsGdPs3y%2BS9w82bqAgJ1LPw97sDuFkoiJA3X9vzR1r2QkvNg3hRaOUsmR4TzTzQE%2BrkBGVCgg2HxMTd6St2G0Lq%2FtCJGeX48Oxx2TYA%2BMPM2MK2Z1ckGOqUBkcYTdVu4h%2Bs3ZOEvCHh4QIkuXVU0wQcr2gT17yFEZMTAXuHWr65ZNaDJHb7LIkawdySwSBuXwGlAMEeycXvBYm2FfK%2FOGRH3AmfuqR5Nhqe7%2FdSYgtDLkw2QawroPB5sZs11QB2kHr35xiq8UBwzxrHI0t7Rp1qbPVHg%2Bot8VAgkOuXN2zj%2BHl8r8vS2BH%2B1s92TjIVFZr4XZ1fFz9%2F2oiHV05fL&X-Amz-Signature=516fdb1410b05d43e60358b21f70446ce2179709874ff8b51834a6cef589b426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

