---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XTKQUGE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNBo6dEpHP2A1qFLiMSkA8h%2FG8HWiSDvnVQL2Qc6GIOQIgEnvrH96ngSG48612oa2k56SPzmG9H2tME4BKxC4Vm0Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFXPdL7NWQ6SVkNJZSrcA6IzNlUDms4iuoxblM4A%2Fe1No8ts5zp2h9hd%2BKW1BRN2Hk4WAVfd4qm2afKXd%2Fh4UguP7hSCDp3Bq3TsW1szSw64qbQyDrkIiy0eOFJRK5WOPyO4ks%2F590o%2FQZGLiV%2BsU0R4mKkMMnm0sp8D4WIBFhvU47GnQVJdnW%2B8UVR9yM4gZ3nXnjLqT%2F9CLsgleyiiPQQgMn%2FV5QEB45It6I6JGu1ZOk9qCKzOLw3JHjidsjrhVJe4N1RLfqvNoAU3jarbnURorkFqSHA5F0n48A%2FczooCrfNh2pmaJB6%2Fp4M9cJna1d1NpBg9WR5ZcR4YBlz1xofcuiQn2bzjKz9TYXkP320FULz9NJLoLIR0Mok2jSMKlltRy3FNMjvgzE30x4nZCrQo4lGb6PsqMGkC94F5Bm987PG8HkWl4cCo9sxqb46FChzz15PpN0eDrGNBDxxyNy3dwoiHK9cxk87VbXz5ZHxZnSuEnyUZ2opev08wdMVsFtNtssrLowJZoMQKqlUW%2BxNnZw9FXoWX2z1gQYHuZpxB56LBMZvXnaZzX49Img8GioTsPzsao%2F3CakIrv0GNycBT%2BvLR5dflWspIP%2F%2Fzti3L8vuEtcivw6On9pLRVHgRicejIMRa4oWV771uMO%2B30ckGOqUBXj9KeGCpE2m6XZ%2Fvt24K9qXAG0c%2FrjxJfcMJgjYuWMUSSbepWIkTLv4KwWJoiKk4k958DOFrowAWKhwzieC2sMQLfo9h%2FaugZP%2BengnwogmqU6yDWT3Vt1wtjZ3qjc4fT8zFuJgpsTcfaG6hjqAlLl2xnE%2BG%2FKMA3JXMZL9OijHuhjJaBTgllJ0wsjSGq02AXuB9JNrvQMpEOrxSb3Y9%2BsekE64n&X-Amz-Signature=af96ce2515947cbf3843b3917d34e80e7170412afaaebf0ef529947126d996f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XTKQUGE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNBo6dEpHP2A1qFLiMSkA8h%2FG8HWiSDvnVQL2Qc6GIOQIgEnvrH96ngSG48612oa2k56SPzmG9H2tME4BKxC4Vm0Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFXPdL7NWQ6SVkNJZSrcA6IzNlUDms4iuoxblM4A%2Fe1No8ts5zp2h9hd%2BKW1BRN2Hk4WAVfd4qm2afKXd%2Fh4UguP7hSCDp3Bq3TsW1szSw64qbQyDrkIiy0eOFJRK5WOPyO4ks%2F590o%2FQZGLiV%2BsU0R4mKkMMnm0sp8D4WIBFhvU47GnQVJdnW%2B8UVR9yM4gZ3nXnjLqT%2F9CLsgleyiiPQQgMn%2FV5QEB45It6I6JGu1ZOk9qCKzOLw3JHjidsjrhVJe4N1RLfqvNoAU3jarbnURorkFqSHA5F0n48A%2FczooCrfNh2pmaJB6%2Fp4M9cJna1d1NpBg9WR5ZcR4YBlz1xofcuiQn2bzjKz9TYXkP320FULz9NJLoLIR0Mok2jSMKlltRy3FNMjvgzE30x4nZCrQo4lGb6PsqMGkC94F5Bm987PG8HkWl4cCo9sxqb46FChzz15PpN0eDrGNBDxxyNy3dwoiHK9cxk87VbXz5ZHxZnSuEnyUZ2opev08wdMVsFtNtssrLowJZoMQKqlUW%2BxNnZw9FXoWX2z1gQYHuZpxB56LBMZvXnaZzX49Img8GioTsPzsao%2F3CakIrv0GNycBT%2BvLR5dflWspIP%2F%2Fzti3L8vuEtcivw6On9pLRVHgRicejIMRa4oWV771uMO%2B30ckGOqUBXj9KeGCpE2m6XZ%2Fvt24K9qXAG0c%2FrjxJfcMJgjYuWMUSSbepWIkTLv4KwWJoiKk4k958DOFrowAWKhwzieC2sMQLfo9h%2FaugZP%2BengnwogmqU6yDWT3Vt1wtjZ3qjc4fT8zFuJgpsTcfaG6hjqAlLl2xnE%2BG%2FKMA3JXMZL9OijHuhjJaBTgllJ0wsjSGq02AXuB9JNrvQMpEOrxSb3Y9%2BsekE64n&X-Amz-Signature=42ab78833fa522a1fcff2fd86053607a5b4e96c892b1d195036e4ce1e84cbc83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

