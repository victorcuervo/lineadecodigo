---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PAH7IN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdaRiZL41tbRwzLmL8ZmWiRLiEC%2B6ODtYXkc43heubZAiEAqweq7iBjalUWXTiLT9z1eVTb1H0N120QLepWvfskEUcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMXQdkPduERBNcleeyrcA3ebTZ69AXZwpPVetXEuGLIy%2FygIBTmilahq9ATcG8LhEwNSiQwjsQgNsnUp4KDCo2pr15OiDUVttxal4U3NWUbO6To2IAC3uthzQqx7VrSIJjTWmSJCnh08RZbN0XY3j%2BbQqnFWiFLpE9m0dg%2BfFWfpbGkKJ0wxrnNjufi8fVY6UBw2hmY9SIz084wBMT8pz68j%2FOMBDA5gincQvDvyUnQqSCMKvFM1oU7AB7eatDU7G3m%2BIYucKe2VY%2FC8OkoSlhvEYQ6SNui5%2FFWAexV4Cg%2FOSamvZNm8fPqsElG75Ud4qrAUZcjLpc%2BwOw38cjm%2BCopUZDuNsbDNpBu2KN3iQbYWu%2F3dtENAkibj9N%2BsHGaKoD1QwWtWMuUHW7U%2FPKLM%2BgY1wNBSoZRf2eujqVJfz2KssbHx8eS6vdMiQ%2FEgUmBbutNVaTDTPx6UfnuDW3ulnQ8RrBCDUdVmo50qfB6SzyTLZ3ILWjwOiO91O%2FgOL%2B4ysJ3N5kxPbnV5uqCB8KPl5xpcN2JLtA741uPRW5dG5YlqNNmi8niGGJhf4gbuC2xYJd%2BgHnbmhCffjaOxoWXizOjZ0AuwOZws5RYOD%2FAa72L5nrCXiaPMza%2Bn1eapnvqcrSudISvM7n3bkOp%2FMIOez8kGOqUB%2BACwJCksrlKx5bk8eZf0VnkoF70J0MizAk0XatKvbuQSUe66JFUgmfucmifVK0mAAjPzE5OOP%2BPmMcGLerCbk7aZHICB3ey7AehoeQM0WosnfGd4cBOgRFDBvTxckd%2Bk2V0NVhMYMxfmrAksuT4JpOV1BCyyFaS3yE1pMNLQS7ThoR3a%2FogBbgRRh9wxOdNFUw8UdJeQmaEIBB8uPBt9L7A4Rh2w&X-Amz-Signature=49e6b6070024971bcf7f037e291df9057fdb8d5689904cd422dd2c41fc0d288f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PAH7IN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdaRiZL41tbRwzLmL8ZmWiRLiEC%2B6ODtYXkc43heubZAiEAqweq7iBjalUWXTiLT9z1eVTb1H0N120QLepWvfskEUcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMXQdkPduERBNcleeyrcA3ebTZ69AXZwpPVetXEuGLIy%2FygIBTmilahq9ATcG8LhEwNSiQwjsQgNsnUp4KDCo2pr15OiDUVttxal4U3NWUbO6To2IAC3uthzQqx7VrSIJjTWmSJCnh08RZbN0XY3j%2BbQqnFWiFLpE9m0dg%2BfFWfpbGkKJ0wxrnNjufi8fVY6UBw2hmY9SIz084wBMT8pz68j%2FOMBDA5gincQvDvyUnQqSCMKvFM1oU7AB7eatDU7G3m%2BIYucKe2VY%2FC8OkoSlhvEYQ6SNui5%2FFWAexV4Cg%2FOSamvZNm8fPqsElG75Ud4qrAUZcjLpc%2BwOw38cjm%2BCopUZDuNsbDNpBu2KN3iQbYWu%2F3dtENAkibj9N%2BsHGaKoD1QwWtWMuUHW7U%2FPKLM%2BgY1wNBSoZRf2eujqVJfz2KssbHx8eS6vdMiQ%2FEgUmBbutNVaTDTPx6UfnuDW3ulnQ8RrBCDUdVmo50qfB6SzyTLZ3ILWjwOiO91O%2FgOL%2B4ysJ3N5kxPbnV5uqCB8KPl5xpcN2JLtA741uPRW5dG5YlqNNmi8niGGJhf4gbuC2xYJd%2BgHnbmhCffjaOxoWXizOjZ0AuwOZws5RYOD%2FAa72L5nrCXiaPMza%2Bn1eapnvqcrSudISvM7n3bkOp%2FMIOez8kGOqUB%2BACwJCksrlKx5bk8eZf0VnkoF70J0MizAk0XatKvbuQSUe66JFUgmfucmifVK0mAAjPzE5OOP%2BPmMcGLerCbk7aZHICB3ey7AehoeQM0WosnfGd4cBOgRFDBvTxckd%2Bk2V0NVhMYMxfmrAksuT4JpOV1BCyyFaS3yE1pMNLQS7ThoR3a%2FogBbgRRh9wxOdNFUw8UdJeQmaEIBB8uPBt9L7A4Rh2w&X-Amz-Signature=12e8487102e3741ba6760b252cf30e7a4354b8d43227839c7ebbe3ac9103039f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

