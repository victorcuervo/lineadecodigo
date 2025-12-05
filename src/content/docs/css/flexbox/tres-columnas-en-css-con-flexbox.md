---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICOTISW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEPk%2BC3z2NHFa34HmWE9lq8s3OGpH4EC3%2F%2BAVFFI4h1AIgLsClhH9PWUw%2FDtRGHDjcaA7%2FU5W%2BF8pLemYD73ITMg4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHw46k2NUYnjfj8rmyrcA8cq81UHICTpmUzjDbgA2FxOAcrqlmq7yrNiDw%2FZZekn61lNUFNZ7NhkmvJMctQVdtW04VGswLJIW9L1sm%2FAL1kFE%2B%2BxBhMjQyA33KG9EentI2ERFCV9q89%2FfZfUJ4NlYwzk31DamVfOda%2FA8oYIP3DAyWu6bwQbFKaSb6LY8FFZgHqtD2xLo6NEZ27e%2FX2vnVumWwpbMLE3iuUsCmZrqXulhhe9MiueDsXX95lnX%2FdfjK31Vlv%2B%2BJMQ0Eh5sCb88TNoIypQV3lL8bG9MfcX%2B9SZrEPqRP3xFJrJRHEow%2FQTr0lMDzxc56QA%2BeSCr1Gpj9CcDnYNXZAqJLJ6c8LWhDrfO5YUmgb5teOjCmoNuIeFhKn%2FKEMV4JxXWNs0YY5oc247zMdmsQrV97KCeWaWMXoZ3J10cBkOGHO%2FChB2DB%2FBSamy8fwV3%2BiqiudRKUOLLAbI5T3Y5jNL2tnomztjh5GJS4V%2B%2BZQosM2u93kmoCuEtvpmV1UPZrUSNVvUQg2dFuPuerNjdXnQA86%2BrZSD3St124pWQ0W%2Fuqo8%2BCIiNahpcA6UBZ3fmmiiXmRKhBg0WGNQG9O%2BUCjEKrnJgdYaWKDzJJaUWtsm%2BhHhPf4STzGs7YR7gBOxKsxA63CDMKDTyskGOqUBtYPFVAW%2FwnIx2E4fF7dwEGHvaax9OAuWAL0Fwp2yYc8oci8rUxvFEbVTWaTXIol7rbn6QvpNctBeJRQtDsL2VnxBdpG%2FqKjqDTlLXgEo4vxu0WXIZKGUVwp1S1UMzOxff8lsn99U44rKrGvLRHDA0KBdOTb%2ByaxNFkyfpeDt6KVq1GDhfyXJkTN3oQuYpZQa4h0DS0El1xMR0FKNZquHN4VHnvsb&X-Amz-Signature=f9dc4f1547936fb29f4b53d8463b363f00482aa7f1048f508ec95cdd64b253f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICOTISW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEPk%2BC3z2NHFa34HmWE9lq8s3OGpH4EC3%2F%2BAVFFI4h1AIgLsClhH9PWUw%2FDtRGHDjcaA7%2FU5W%2BF8pLemYD73ITMg4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHw46k2NUYnjfj8rmyrcA8cq81UHICTpmUzjDbgA2FxOAcrqlmq7yrNiDw%2FZZekn61lNUFNZ7NhkmvJMctQVdtW04VGswLJIW9L1sm%2FAL1kFE%2B%2BxBhMjQyA33KG9EentI2ERFCV9q89%2FfZfUJ4NlYwzk31DamVfOda%2FA8oYIP3DAyWu6bwQbFKaSb6LY8FFZgHqtD2xLo6NEZ27e%2FX2vnVumWwpbMLE3iuUsCmZrqXulhhe9MiueDsXX95lnX%2FdfjK31Vlv%2B%2BJMQ0Eh5sCb88TNoIypQV3lL8bG9MfcX%2B9SZrEPqRP3xFJrJRHEow%2FQTr0lMDzxc56QA%2BeSCr1Gpj9CcDnYNXZAqJLJ6c8LWhDrfO5YUmgb5teOjCmoNuIeFhKn%2FKEMV4JxXWNs0YY5oc247zMdmsQrV97KCeWaWMXoZ3J10cBkOGHO%2FChB2DB%2FBSamy8fwV3%2BiqiudRKUOLLAbI5T3Y5jNL2tnomztjh5GJS4V%2B%2BZQosM2u93kmoCuEtvpmV1UPZrUSNVvUQg2dFuPuerNjdXnQA86%2BrZSD3St124pWQ0W%2Fuqo8%2BCIiNahpcA6UBZ3fmmiiXmRKhBg0WGNQG9O%2BUCjEKrnJgdYaWKDzJJaUWtsm%2BhHhPf4STzGs7YR7gBOxKsxA63CDMKDTyskGOqUBtYPFVAW%2FwnIx2E4fF7dwEGHvaax9OAuWAL0Fwp2yYc8oci8rUxvFEbVTWaTXIol7rbn6QvpNctBeJRQtDsL2VnxBdpG%2FqKjqDTlLXgEo4vxu0WXIZKGUVwp1S1UMzOxff8lsn99U44rKrGvLRHDA0KBdOTb%2ByaxNFkyfpeDt6KVq1GDhfyXJkTN3oQuYpZQa4h0DS0El1xMR0FKNZquHN4VHnvsb&X-Amz-Signature=fba58c1704918ee9caa61dd2a9c73c3e4a175f7faba9311c612a295e113bfd68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

