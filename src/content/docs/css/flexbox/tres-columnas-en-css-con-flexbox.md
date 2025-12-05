---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NQ6LN2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHtzoDKyKsMDdJov8tuYqGLiCUh1qCDBHNBlRWOdhY2AiAQfUSNDTnokHOqjv9UoTU2YXE9UR3LC6Sm76mCj5mIVir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM%2F%2BOSc%2BdPSBmSMvfLKtwDj1%2B57eGf2VYCVgp0pHKXWRl3zNc%2Fx30pAscY2IihLWmIP8gsCsJE3Q1ohe3uWCfQqkSITXsnoW8DK6FQT%2BaqfcYuLm4nlUNCXU26TWAFPsB%2FlMdPIS%2BymLDkmolJyqgHEi%2FMTVxmY8gy63uHUttW8gvWLM%2Ba5O%2BuSuVvhNYpXcOzY4BosCWZWr0SSfgRYvzoK%2FzCgUDxL8CcqtKc4F9hlz7oxMKzek3eS6k2oz9SPtV2Jf7TncMGKBRazpWDD4ipmHd%2Fjlg9prL21Crj1KV%2F3IAYBaCA17TeRZjMjeTgtpnQ4oBVZxdaRUr7hDAcJQF5SDIPLQR1Gb7CKT68ut5t%2FTEOCaySBicy2tCeqYtUxBvnvcdPajWgOH%2FDL7t8cUE6CjLEIXdSGv7Z0m2gRUeSPOVxG5GXZjUzrC1EwS9g58TCpkVcLMESOS9KsmraFx%2Bbyhw%2BBQutfvx72Ag%2FpeVop74jD%2BTFzp%2FwHgOgOSo2eKuSV2JRzm4HfMmrc8HVErs%2FPFkGnf%2FW%2BTeH5VYQwN%2BRpCep%2F3vE9%2B8CfiDDq%2FxSRR6XiLe5zXwAoYdD%2FTghbOg0UpaS7U5G7z1O3Jvpzp71IRcQUJz36w3DVQ%2F6SCDRv%2ByBWwn53%2Byy%2BEJZI8YwjYzIyQY6pgFgUGirm1tBg4Bhk09qe%2FvLx6AcppW%2BjaVbItVwwXvQaSrlz1PMDuJB8X9f3cwAM3hu2masE%2F7N9FgHleUfwKDkdHhel%2BTplSUNJNQRXWp0q6aUO4vbXkQvfGdV5wdlk1gqbT2Mh8DFF6%2BFOoKgQDPbV8XOSadDRHH6LkMONXXEVe1puqd1LkKDBOwxbWqw%2FFvSCbOcNZHScc4uAfePIHmn1wUTBMFu&X-Amz-Signature=a1f24829db6ff4707833ffb0ec4dba818d82e393030b35d66e63be123d8d06dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NQ6LN2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHtzoDKyKsMDdJov8tuYqGLiCUh1qCDBHNBlRWOdhY2AiAQfUSNDTnokHOqjv9UoTU2YXE9UR3LC6Sm76mCj5mIVir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM%2F%2BOSc%2BdPSBmSMvfLKtwDj1%2B57eGf2VYCVgp0pHKXWRl3zNc%2Fx30pAscY2IihLWmIP8gsCsJE3Q1ohe3uWCfQqkSITXsnoW8DK6FQT%2BaqfcYuLm4nlUNCXU26TWAFPsB%2FlMdPIS%2BymLDkmolJyqgHEi%2FMTVxmY8gy63uHUttW8gvWLM%2Ba5O%2BuSuVvhNYpXcOzY4BosCWZWr0SSfgRYvzoK%2FzCgUDxL8CcqtKc4F9hlz7oxMKzek3eS6k2oz9SPtV2Jf7TncMGKBRazpWDD4ipmHd%2Fjlg9prL21Crj1KV%2F3IAYBaCA17TeRZjMjeTgtpnQ4oBVZxdaRUr7hDAcJQF5SDIPLQR1Gb7CKT68ut5t%2FTEOCaySBicy2tCeqYtUxBvnvcdPajWgOH%2FDL7t8cUE6CjLEIXdSGv7Z0m2gRUeSPOVxG5GXZjUzrC1EwS9g58TCpkVcLMESOS9KsmraFx%2Bbyhw%2BBQutfvx72Ag%2FpeVop74jD%2BTFzp%2FwHgOgOSo2eKuSV2JRzm4HfMmrc8HVErs%2FPFkGnf%2FW%2BTeH5VYQwN%2BRpCep%2F3vE9%2B8CfiDDq%2FxSRR6XiLe5zXwAoYdD%2FTghbOg0UpaS7U5G7z1O3Jvpzp71IRcQUJz36w3DVQ%2F6SCDRv%2ByBWwn53%2Byy%2BEJZI8YwjYzIyQY6pgFgUGirm1tBg4Bhk09qe%2FvLx6AcppW%2BjaVbItVwwXvQaSrlz1PMDuJB8X9f3cwAM3hu2masE%2F7N9FgHleUfwKDkdHhel%2BTplSUNJNQRXWp0q6aUO4vbXkQvfGdV5wdlk1gqbT2Mh8DFF6%2BFOoKgQDPbV8XOSadDRHH6LkMONXXEVe1puqd1LkKDBOwxbWqw%2FFvSCbOcNZHScc4uAfePIHmn1wUTBMFu&X-Amz-Signature=bcdcb2b642591a18f188c32029d888a42d58c73e5226c8f2324ee8ad1552dd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

