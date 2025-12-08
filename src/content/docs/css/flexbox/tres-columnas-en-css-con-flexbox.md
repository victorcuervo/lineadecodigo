---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666C4XM6L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuLbbScOAm8RcNQRetiuSW%2BxtLVM94HdrAQPj2G3tvlAiBg0prsAAC6UACQom5yMWMV1a3zASwiUttEEQgoi4qyRSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEY%2B88OttSmV0y4TeKtwDC9Gspnrvo3L61Cvip2AHAgfwVhT9yE1NdZVpOTfjgwh7L6xAAC2rnPP8sZNNyMaYBe%2B55H26szWIVci5J2GfH8YS%2F2pKRYN81fWBk1M4mBHiAo5KhoMiNH1fDe9K%2BbL9t2MTXYQUN%2BpnhM4XU4uumntuJ8ic29FO8OFr%2BNHSNMNJq5eCNdKDeVGI4q6S8NAxW4D549jiqN%2BlKoUfrt0TagRoB8yaZzBe%2BLm%2BFCLDcSX8aciN4yKTEYe%2BbuTq9BeYSDpkWP8wgHohByJVAEiMqmB%2Byoiuqw7ZqIRzFshkZKFSRtzPHVjcTPMmmfww%2FUA96UHG%2BD%2FRuClQJzqWo4CqeWb0cX9goddYgfprhSL%2Bl%2BlLFMOPqEF%2Fmx8b2oNExfJ5hnBbwlqRgNnQag90jPgkej7Edp5Q0A5pxro9TytiTSLBr69pS5pjObpUksoT5aKGDli3ef0KJHaJkhJaZT%2FRejjeG%2FR71FQQDJj526ojNIo5Jnq00kxo9Y1Jgb9MvJDzyeA6dbZuBNLZPPOss30%2Bd7MjYXsUR%2FWyifmDAeTK9%2B59mL8MR979uUN%2BJf4UATssVECZ%2BXuL6I4L3S43hbiiDM2HZ4rmLDQbq8CIsn4dHcJPcxhJcpiJ0835jhEwsO3ZyQY6pgHLrEltXLUzKudv4GGWDKX02HY8jPUH%2BvjRnNVElAM1m4EMHD2YR%2FxHUM6Z2LH9kYFodFa4x3DH7AruvO5fqtO2nPKH1NqCMSh3H7aIg25HcxfOH1RyigphFFlGOPy1mzpEQ0vr5rZUuoZNifcFZSaWKMGGyaWiMzb%2B7EbpXC1PE49mI6JSeUnpGHIEa0%2F%2BYzSJijXWTzPRVykSbLDgyhPwKl3klIJB&X-Amz-Signature=28f11def1d343ff06bca9fff72b46ef14d6789b6a0444d4ceb224d61127c66b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666C4XM6L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuLbbScOAm8RcNQRetiuSW%2BxtLVM94HdrAQPj2G3tvlAiBg0prsAAC6UACQom5yMWMV1a3zASwiUttEEQgoi4qyRSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEY%2B88OttSmV0y4TeKtwDC9Gspnrvo3L61Cvip2AHAgfwVhT9yE1NdZVpOTfjgwh7L6xAAC2rnPP8sZNNyMaYBe%2B55H26szWIVci5J2GfH8YS%2F2pKRYN81fWBk1M4mBHiAo5KhoMiNH1fDe9K%2BbL9t2MTXYQUN%2BpnhM4XU4uumntuJ8ic29FO8OFr%2BNHSNMNJq5eCNdKDeVGI4q6S8NAxW4D549jiqN%2BlKoUfrt0TagRoB8yaZzBe%2BLm%2BFCLDcSX8aciN4yKTEYe%2BbuTq9BeYSDpkWP8wgHohByJVAEiMqmB%2Byoiuqw7ZqIRzFshkZKFSRtzPHVjcTPMmmfww%2FUA96UHG%2BD%2FRuClQJzqWo4CqeWb0cX9goddYgfprhSL%2Bl%2BlLFMOPqEF%2Fmx8b2oNExfJ5hnBbwlqRgNnQag90jPgkej7Edp5Q0A5pxro9TytiTSLBr69pS5pjObpUksoT5aKGDli3ef0KJHaJkhJaZT%2FRejjeG%2FR71FQQDJj526ojNIo5Jnq00kxo9Y1Jgb9MvJDzyeA6dbZuBNLZPPOss30%2Bd7MjYXsUR%2FWyifmDAeTK9%2B59mL8MR979uUN%2BJf4UATssVECZ%2BXuL6I4L3S43hbiiDM2HZ4rmLDQbq8CIsn4dHcJPcxhJcpiJ0835jhEwsO3ZyQY6pgHLrEltXLUzKudv4GGWDKX02HY8jPUH%2BvjRnNVElAM1m4EMHD2YR%2FxHUM6Z2LH9kYFodFa4x3DH7AruvO5fqtO2nPKH1NqCMSh3H7aIg25HcxfOH1RyigphFFlGOPy1mzpEQ0vr5rZUuoZNifcFZSaWKMGGyaWiMzb%2B7EbpXC1PE49mI6JSeUnpGHIEa0%2F%2BYzSJijXWTzPRVykSbLDgyhPwKl3klIJB&X-Amz-Signature=61bad9e538730d549fb4263f00c61518b685b39fcab77ab397c0300443fb1053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

