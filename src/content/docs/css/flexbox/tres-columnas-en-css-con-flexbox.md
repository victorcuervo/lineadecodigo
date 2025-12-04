---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KLH7E4J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH09pSf9H7VrfMjARCDpWrI2x9dFx0yVZbHHeoaKwodLAiAziGy8xQwea7gITHkpNaskCT6WQr4xxTnc2FsbnsTocSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMtNTFevRqtxpgDO2UKtwDIQy1YdjGb5qaqiW1BIdR%2FJKfSmMJdYA56K4GdcLsjSdguyeTQ3ojbZKiP6Frd1p7PzuSsn7WHrzPN9DOEALikXM9qveesWTNTtn4YnGjSZcvGu2WDDFmRP12n2PwKL4zO0wLk%2BSc6NQGUTTmVUHd5thNk3dLlR4IPKR3SxfNiYaUf%2FD52mx1n9aROp2%2FFBd%2BIoj%2FhOj3BN2MQNufFp9zV2VEjf18htYcraQ4kzrABmPE1FNkPkB2Klc9LqtBQj50of9mhjuPFdn43UrRWVnabxElr5hvY7CFSpJk%2Fspp3CwOVmeyvHwTc55vItPJ%2FZY4m6EscUZkxQxmFfb4XRKWZy2uAOlWDeBUyMF88FezddjCTzRAs4zEva9uBiDHSc6jKUYcqqfVUG%2F8L3d8gDcB%2FS2%2Bww4PFIuh4K7mZRc1b%2Bc%2Bs4FLC1qNRNzDK3DG1yVm%2Bk9DClQ8JpskirJ2oxcG1jmP8ZYKdTB5saQg6h6JkPHsNA9x2D%2BgNyrWffTtO1xI%2B37vw2qgS9%2FnVlgruCchZ13iC%2FzoNtMj3%2BQjdVCdQxHo37JHNOiFxlUHIi%2FOeDZQEQZaiEb8RWul0pXYFkx26PMiz7r7TEkFzuSWT65GADPaNSMFEciYUUpiD10w1NvGyQY6pgH%2BjZZRgeA9EwLzatuqxTR3RsDEaflUnUJcnnCg%2B%2FFylATXaWAO3dabX%2FiVgt7EAabQc9sx%2Fhx4Ix8mUitNYTNsH7zN5YYEkDSJ74lmm3fZYoxg56rHYpLAXLN2ZnYRCnsrBCoqboRr74P%2FznbKqaZKrt1a335PvsvZxykXo8Fk%2Fql6noUpJcRJQVWN%2BGDkcGzaMrbpdMqrFgmRre1jT2eNdP3WimuG&X-Amz-Signature=5c0980fcf6950f0156d3684d40b652777a9a0ba32736a723163856ad2ae22c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KLH7E4J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH09pSf9H7VrfMjARCDpWrI2x9dFx0yVZbHHeoaKwodLAiAziGy8xQwea7gITHkpNaskCT6WQr4xxTnc2FsbnsTocSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMtNTFevRqtxpgDO2UKtwDIQy1YdjGb5qaqiW1BIdR%2FJKfSmMJdYA56K4GdcLsjSdguyeTQ3ojbZKiP6Frd1p7PzuSsn7WHrzPN9DOEALikXM9qveesWTNTtn4YnGjSZcvGu2WDDFmRP12n2PwKL4zO0wLk%2BSc6NQGUTTmVUHd5thNk3dLlR4IPKR3SxfNiYaUf%2FD52mx1n9aROp2%2FFBd%2BIoj%2FhOj3BN2MQNufFp9zV2VEjf18htYcraQ4kzrABmPE1FNkPkB2Klc9LqtBQj50of9mhjuPFdn43UrRWVnabxElr5hvY7CFSpJk%2Fspp3CwOVmeyvHwTc55vItPJ%2FZY4m6EscUZkxQxmFfb4XRKWZy2uAOlWDeBUyMF88FezddjCTzRAs4zEva9uBiDHSc6jKUYcqqfVUG%2F8L3d8gDcB%2FS2%2Bww4PFIuh4K7mZRc1b%2Bc%2Bs4FLC1qNRNzDK3DG1yVm%2Bk9DClQ8JpskirJ2oxcG1jmP8ZYKdTB5saQg6h6JkPHsNA9x2D%2BgNyrWffTtO1xI%2B37vw2qgS9%2FnVlgruCchZ13iC%2FzoNtMj3%2BQjdVCdQxHo37JHNOiFxlUHIi%2FOeDZQEQZaiEb8RWul0pXYFkx26PMiz7r7TEkFzuSWT65GADPaNSMFEciYUUpiD10w1NvGyQY6pgH%2BjZZRgeA9EwLzatuqxTR3RsDEaflUnUJcnnCg%2B%2FFylATXaWAO3dabX%2FiVgt7EAabQc9sx%2Fhx4Ix8mUitNYTNsH7zN5YYEkDSJ74lmm3fZYoxg56rHYpLAXLN2ZnYRCnsrBCoqboRr74P%2FznbKqaZKrt1a335PvsvZxykXo8Fk%2Fql6noUpJcRJQVWN%2BGDkcGzaMrbpdMqrFgmRre1jT2eNdP3WimuG&X-Amz-Signature=de6cac5e69282dbcc8164609b16a1ccf8ace8a52e8b5934bd3ebfa67669f6ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

