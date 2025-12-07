---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGN5H7P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXqpJ83b90CONyUccaYM4Lkjgqomb3Okc9NB3%2B4wQ%2F5AiEAsaYHVeZx4O8vALIgNUXhSdjR0%2BGhGqhPVd3vcRCTcKUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsm1Fn%2Fs6Q70s0Y%2BSrcAwEK7hzujhdrDpcSp6AY2RJ9MEYTQlhlW5gOnBaiPEWFmdOiBTGbOBdyR7AlRET3ER7RU2QDKuFoTpkU%2BZYGaiiCpEl8dVyn%2Fe8wwUSQe%2FahiWCcNfz%2FalI1DYPWmMEmYZBQy9LqnEezyMmU30b8J36QeyUxdn9Lhqo2RzQHJFcdE%2FxBL7TsenKUIoGq6gyIeGbxEa4N1YwxR%2Fx38dc5kb2qI7MM4sE428j89kQWBJ4UQv1tetZerUNLswBikEbz6Y5p4pA1r16kOA%2Br7Y59N9hxYd6xc0VNKDAEr520eO3qTlR3gvf5%2F8M%2Bv0dhyEe3%2F840CK56koGtkHH931NmAVhS9BR7cEW9MfXZXGO%2FGGY96OpiqeExbrC8zIOdn9SLZaF%2BxTJvBRSpdMfD3QdyVTBeO87rRkwbwQlZOe8L4i8%2BQgN3zQGEWGJLxtq2OU%2Fjm%2Fc3Td4Q5v1S4aIl415DH%2Ba6FPD1GPscIQHwjUchw%2FGLMWD8m9ui8kYQm20n9mRoEjRA8Astm9fJp49NeAuomkGXBkaeRYc3302HFEV2%2F8Ub3ZgJ973HvXCdQ4uneO5mzcFIdmpHjLyAi7HlMDvs38fQcqciPn6rbxywH2TQRvdCbxGyI3PDCNoq3xVyMKGZ1ckGOqUBlWmat7IdRywYxT9U8%2FFDQlXkzAjMMLCk5wIa9OI%2BYYvr0XgUJ3vI1e8%2F%2FVDjCYDuOKUqJehBT7DTrwK%2FPhJq9vSmjEHsGTEWnRwOeP%2F%2B%2BPE4Is%2Fg8LgLDU2YqXEL1vqAcAkuQmR1j%2FKqczBAUMLvZjbzsDNGPSmn%2Fm2mzu740u8mTVdNfHRTQI6PO%2FMJeu4HUHcPJ1CRFEY9vUl%2Bs43hVS192mXI&X-Amz-Signature=c0559b65a9b32cc93dcd33ecdbf5370f954d8db0832dec28f3b29def9cf42cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGN5H7P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXqpJ83b90CONyUccaYM4Lkjgqomb3Okc9NB3%2B4wQ%2F5AiEAsaYHVeZx4O8vALIgNUXhSdjR0%2BGhGqhPVd3vcRCTcKUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsm1Fn%2Fs6Q70s0Y%2BSrcAwEK7hzujhdrDpcSp6AY2RJ9MEYTQlhlW5gOnBaiPEWFmdOiBTGbOBdyR7AlRET3ER7RU2QDKuFoTpkU%2BZYGaiiCpEl8dVyn%2Fe8wwUSQe%2FahiWCcNfz%2FalI1DYPWmMEmYZBQy9LqnEezyMmU30b8J36QeyUxdn9Lhqo2RzQHJFcdE%2FxBL7TsenKUIoGq6gyIeGbxEa4N1YwxR%2Fx38dc5kb2qI7MM4sE428j89kQWBJ4UQv1tetZerUNLswBikEbz6Y5p4pA1r16kOA%2Br7Y59N9hxYd6xc0VNKDAEr520eO3qTlR3gvf5%2F8M%2Bv0dhyEe3%2F840CK56koGtkHH931NmAVhS9BR7cEW9MfXZXGO%2FGGY96OpiqeExbrC8zIOdn9SLZaF%2BxTJvBRSpdMfD3QdyVTBeO87rRkwbwQlZOe8L4i8%2BQgN3zQGEWGJLxtq2OU%2Fjm%2Fc3Td4Q5v1S4aIl415DH%2Ba6FPD1GPscIQHwjUchw%2FGLMWD8m9ui8kYQm20n9mRoEjRA8Astm9fJp49NeAuomkGXBkaeRYc3302HFEV2%2F8Ub3ZgJ973HvXCdQ4uneO5mzcFIdmpHjLyAi7HlMDvs38fQcqciPn6rbxywH2TQRvdCbxGyI3PDCNoq3xVyMKGZ1ckGOqUBlWmat7IdRywYxT9U8%2FFDQlXkzAjMMLCk5wIa9OI%2BYYvr0XgUJ3vI1e8%2F%2FVDjCYDuOKUqJehBT7DTrwK%2FPhJq9vSmjEHsGTEWnRwOeP%2F%2B%2BPE4Is%2Fg8LgLDU2YqXEL1vqAcAkuQmR1j%2FKqczBAUMLvZjbzsDNGPSmn%2Fm2mzu740u8mTVdNfHRTQI6PO%2FMJeu4HUHcPJ1CRFEY9vUl%2Bs43hVS192mXI&X-Amz-Signature=c38ef8e13ef08cfddfaabb0696bb2f0f3732e5d2d9578fcb90f1c7d3dfbbbe28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

