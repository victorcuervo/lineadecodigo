---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7SHBNW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvSH8amOFbroNhD7w%2Bt7K21yRSI%2FECy%2BWnuusK2uqTgAiEAhlU1KmHAcI74cPIw0Lq5rZ%2F5OpcgHJxPzdVe81a9BGAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqjJ56nXt83mJn2JCrcAxbn19H17mmnXePcqCnDUyYqJuB9ektRoQaaZJxNflrTQZ0se3ad09RSE1J2DRXryZnSoqUr1IFKhSqvqr7yg7wpTwer1XSmbVUx%2FtdCNv7ep%2FdEUxbArpPY3IHLC%2BuzMnYA2AyZh2ZcGUDb9zmG4ztb97qUpER6mbLY8VKe6eseaXQK0ByBN86bpffFQSk6%2FIu4e5MzERkNsJ2uktm92%2BLNwGUg1mcuKgJ1iLDsMFKvtbK3bQZPXYRI3%2BLHKseAxMIWd4EajCjn7N3A71EJA2uVpAgC4TxE8XeEnhXRp0l5VgbB3Ab3zB7CLsTDCyTbNmDEJM%2FYT5iuSCbOZK%2B7PDponLp8zQkecHcjYTvzeWafdO%2FW%2B3KCGm7317dwsgCctwdR4vrNjC4dGXL50tq4pVPcO0geNs6BbDF0CPNrj1hY1M3F1rT1ViU6nrHQ%2Fm8Mvah27KGKBZdyt1GDu6ilJhnMiIX5IzaoRXgHF6XAP8um3qkxcOunSAcWVyHVZddraZB1%2BaP0CJF0t9XYp0ftqQAHAf3%2FpBP5GWkxMcNiHLZ%2BDNWYW%2FkVlJTQ2r922a%2BuDD9kqQLc%2FMrEAYd5U0ggB9iNG2W44yphkjVV2ch6xzFRU66ZodDwL3NhxbCFMPns2ckGOqUBxYCHe1gn0Ix8v53TCW3kj0P0J0tWNbpxlXrLqk4uxxa1BIOtcTnWtRAG2mUbhXwuX%2F%2Bp1Yic1MUQwRDV3hgp4DPwBD0KZ3mpWpP9kJZdXqN0eivg2729TqDL6emDY29bxlRzY%2FLoOgIa78otP5Im5AHIU%2FoRcQYPIX7UFjpYRa5yxCfCPnKFMroc3P1U1mGAiqOLEkuzSrA2VDEzyPchme8Acwzq&X-Amz-Signature=8c6857272b3b1421e3c626d9146278e27c86c81658d5afd003c3e59c7b618dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7SHBNW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvSH8amOFbroNhD7w%2Bt7K21yRSI%2FECy%2BWnuusK2uqTgAiEAhlU1KmHAcI74cPIw0Lq5rZ%2F5OpcgHJxPzdVe81a9BGAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqjJ56nXt83mJn2JCrcAxbn19H17mmnXePcqCnDUyYqJuB9ektRoQaaZJxNflrTQZ0se3ad09RSE1J2DRXryZnSoqUr1IFKhSqvqr7yg7wpTwer1XSmbVUx%2FtdCNv7ep%2FdEUxbArpPY3IHLC%2BuzMnYA2AyZh2ZcGUDb9zmG4ztb97qUpER6mbLY8VKe6eseaXQK0ByBN86bpffFQSk6%2FIu4e5MzERkNsJ2uktm92%2BLNwGUg1mcuKgJ1iLDsMFKvtbK3bQZPXYRI3%2BLHKseAxMIWd4EajCjn7N3A71EJA2uVpAgC4TxE8XeEnhXRp0l5VgbB3Ab3zB7CLsTDCyTbNmDEJM%2FYT5iuSCbOZK%2B7PDponLp8zQkecHcjYTvzeWafdO%2FW%2B3KCGm7317dwsgCctwdR4vrNjC4dGXL50tq4pVPcO0geNs6BbDF0CPNrj1hY1M3F1rT1ViU6nrHQ%2Fm8Mvah27KGKBZdyt1GDu6ilJhnMiIX5IzaoRXgHF6XAP8um3qkxcOunSAcWVyHVZddraZB1%2BaP0CJF0t9XYp0ftqQAHAf3%2FpBP5GWkxMcNiHLZ%2BDNWYW%2FkVlJTQ2r922a%2BuDD9kqQLc%2FMrEAYd5U0ggB9iNG2W44yphkjVV2ch6xzFRU66ZodDwL3NhxbCFMPns2ckGOqUBxYCHe1gn0Ix8v53TCW3kj0P0J0tWNbpxlXrLqk4uxxa1BIOtcTnWtRAG2mUbhXwuX%2F%2Bp1Yic1MUQwRDV3hgp4DPwBD0KZ3mpWpP9kJZdXqN0eivg2729TqDL6emDY29bxlRzY%2FLoOgIa78otP5Im5AHIU%2FoRcQYPIX7UFjpYRa5yxCfCPnKFMroc3P1U1mGAiqOLEkuzSrA2VDEzyPchme8Acwzq&X-Amz-Signature=c81cdce794d830cb19ef4d4c93448d7851dc79f2bff26a94c1ab7f86b1ed0727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

