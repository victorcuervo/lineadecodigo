---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QOLXWW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1t4R7EkRymitcoZQw0IzPwb%2B2aCEy3UKHrsat94BhNgIgIMX7S%2FrX01rY3sOzlLMXT%2FOe6QTZKNtDWv6EXtxu7Fwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMH3SBO%2FZFSSs7CtmyrcA0hjFVjh6Y6yqWS09lH5EToXE%2FoA%2BnfvYYL3nHWo1dfHhUKlblJlAMMkQZ38fMQ5m9NXXSrZodKHyOJjwko1LI3tJN11irnNFQQ5LTIKkn9RXtf%2F4dit%2FU0dqfmpndpdu3RfU%2BNMfJJKPnm8GuSDsyDp5K2LkfTgtDNGqzeg%2BcFgaEv4FdZvn6G4Z93pEDgTYJkBsLVphr5lbO0s2c8OUw%2BjqZvindowplHi4wV4l9bYpHWuRIv5fL43f%2B4kDR8J78b0mV4GV12jetFeYy9nWhqVQ4syhTDtb8RspW9I4AqtOv%2F43lJInRkZ4eH1lf4DjAXSg5W6yMph4KNUgMOv4AcqGcIqwpsMOnqbVQMJj78xZaA%2FuIJgZyFXBlUn1BoSwdEd4%2FQj03Rth%2BhgVH%2FCZ6Fpd1%2BPmD0K63a4DwqnWTmvMXamPebxkqzll6GV8uc9FJl31ctpgq6k6ym8AL03osyrmeIKXOeQvr7kkno0vCdK05PVgNpaUrXuxtElRqg2IBZ1gNDBIYgZ%2BgSMROmsFfAyBk1xoh5hkVhulbLILzvlOjZYgw8bE3xxw9BmCPLTtqZDOga5zOffFZRxQWP%2FOnXH02rUKeSMjxVI%2FTe8qyTWMZ%2BhvTliy4OXr0gNMPzWyskGOqUBEkVUyPhmLRI31Hywa13En8oaqoFFAgqJY1mj2ROEnFccC8qZska4xtHDbjNLC5B5l0IB%2BzoxhCZJaaCvMpRuNTsW02GeqZ2mJ4dMFkifOoszuEkDFTpfH2trQPsOn2eGu3e1BXQJpboQu%2F9DDJFkBCbv0I5Fs0FlzGdjetm3Cj1wgpWt6L0z8Z6XYFxKW0ox4ihGADaYX2WmItgg8PlpaTr%2F%2BQT3&X-Amz-Signature=2ae0a676768c2873e4ceb3e94b2fd4c8b63b47114d39dfa44e780d2f238db95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QOLXWW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1t4R7EkRymitcoZQw0IzPwb%2B2aCEy3UKHrsat94BhNgIgIMX7S%2FrX01rY3sOzlLMXT%2FOe6QTZKNtDWv6EXtxu7Fwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMH3SBO%2FZFSSs7CtmyrcA0hjFVjh6Y6yqWS09lH5EToXE%2FoA%2BnfvYYL3nHWo1dfHhUKlblJlAMMkQZ38fMQ5m9NXXSrZodKHyOJjwko1LI3tJN11irnNFQQ5LTIKkn9RXtf%2F4dit%2FU0dqfmpndpdu3RfU%2BNMfJJKPnm8GuSDsyDp5K2LkfTgtDNGqzeg%2BcFgaEv4FdZvn6G4Z93pEDgTYJkBsLVphr5lbO0s2c8OUw%2BjqZvindowplHi4wV4l9bYpHWuRIv5fL43f%2B4kDR8J78b0mV4GV12jetFeYy9nWhqVQ4syhTDtb8RspW9I4AqtOv%2F43lJInRkZ4eH1lf4DjAXSg5W6yMph4KNUgMOv4AcqGcIqwpsMOnqbVQMJj78xZaA%2FuIJgZyFXBlUn1BoSwdEd4%2FQj03Rth%2BhgVH%2FCZ6Fpd1%2BPmD0K63a4DwqnWTmvMXamPebxkqzll6GV8uc9FJl31ctpgq6k6ym8AL03osyrmeIKXOeQvr7kkno0vCdK05PVgNpaUrXuxtElRqg2IBZ1gNDBIYgZ%2BgSMROmsFfAyBk1xoh5hkVhulbLILzvlOjZYgw8bE3xxw9BmCPLTtqZDOga5zOffFZRxQWP%2FOnXH02rUKeSMjxVI%2FTe8qyTWMZ%2BhvTliy4OXr0gNMPzWyskGOqUBEkVUyPhmLRI31Hywa13En8oaqoFFAgqJY1mj2ROEnFccC8qZska4xtHDbjNLC5B5l0IB%2BzoxhCZJaaCvMpRuNTsW02GeqZ2mJ4dMFkifOoszuEkDFTpfH2trQPsOn2eGu3e1BXQJpboQu%2F9DDJFkBCbv0I5Fs0FlzGdjetm3Cj1wgpWt6L0z8Z6XYFxKW0ox4ihGADaYX2WmItgg8PlpaTr%2F%2BQT3&X-Amz-Signature=59248df09e691fa0c1653c73c26dbcbf7c655d74f52475fac8ba977de64d3186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

