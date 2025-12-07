---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKEQ65F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfxcr46%2FLQFxZqmSaAAQMLvy6%2Fm2ZuWkRS0ZeUGssRcAIgLEtFBYD3ZUNs2%2BEgnlqT9P8pB2igaWtrjgx%2BElE%2F6WkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJocxdpdERiKZEuw2CrcA4m%2FrhUkxaQNi8CN2IGLXFWSowvxKGw9ccC20aPwcdBDfOF1gL7ycpkxrDTPMyKYHTTjscRQNkrS6zd9nPK6poBsAh%2FR0qaV0BucntWtlyT%2FQOWVJcYDmxCNYpaBnyJ01TX2GvDn70C7Biwo6UySKeRyvnh1bmQx0%2FwUzaZmrfqP487WX9Mi5T6NTueEX6gNalLga%2BITHYlXMGzRxXZqDoKw12OMiqtW4Q6CDho21SZIPaumcUe%2FxdM3BBR%2F9n76w8mwJUhm%2Fwfs53hlFALtIa4OtnRZ98Vo%2BzoilN4kQKUAtqU0uWp28TkyrOk0%2BT8rvebq%2Fr4CxXfk7N%2F8Pj29h9Aono%2Bt3%2Fa3D0JQ94gscjEtilCncmrCGRQmh9tfGtK%2B%2FxmzVFWNrznxzzvN1OvKP5sDv31yibStJnkKDV9FmbhsP2rrwfC5h8cbOydypXLMr1g%2FgSX8dElb79nWZf9YbEkL3zO1AxfRjbEs7jiS65aPShZ4kIbzDOOCAyWjWWgtzzuoIirOeo1lWJw4SaMTEjfsjmjW9utxhXTK4fAdqoaAAfYa202H78hAoxGbdogVAclmdyzZWQO2t8x9NX27O6jC%2Fz9rh%2FOIOwkTGxycpR2XJa5oWGYSBOWFgkwvMOzG18kGOqUBRR6OSi%2FrRAJVXnWUblBlPSFFUaROAT6g3Tugja%2BCHmy3CKMr2l6oR7K%2FBc2LfgOiJ%2Bp%2FTxOWqVJiapKH6EqMfTZcVP%2Bdg%2BC0hbHPgj6dyBgPxjXqBDPlYpPgShlvhcJssj%2FxskaeB2WP3pvA7AA0aPIT6ZAX4JhoCyGvqRm3vKSz6xY%2BHDbUyH1gft36OJThtOQOWpgDGD94IIQCbR8%2BwTevOK4k&X-Amz-Signature=d64fbf136a3d6d46f39bd6f38a3cd869e89ca954275eac2f55ee105a303d83b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKEQ65F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfxcr46%2FLQFxZqmSaAAQMLvy6%2Fm2ZuWkRS0ZeUGssRcAIgLEtFBYD3ZUNs2%2BEgnlqT9P8pB2igaWtrjgx%2BElE%2F6WkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJocxdpdERiKZEuw2CrcA4m%2FrhUkxaQNi8CN2IGLXFWSowvxKGw9ccC20aPwcdBDfOF1gL7ycpkxrDTPMyKYHTTjscRQNkrS6zd9nPK6poBsAh%2FR0qaV0BucntWtlyT%2FQOWVJcYDmxCNYpaBnyJ01TX2GvDn70C7Biwo6UySKeRyvnh1bmQx0%2FwUzaZmrfqP487WX9Mi5T6NTueEX6gNalLga%2BITHYlXMGzRxXZqDoKw12OMiqtW4Q6CDho21SZIPaumcUe%2FxdM3BBR%2F9n76w8mwJUhm%2Fwfs53hlFALtIa4OtnRZ98Vo%2BzoilN4kQKUAtqU0uWp28TkyrOk0%2BT8rvebq%2Fr4CxXfk7N%2F8Pj29h9Aono%2Bt3%2Fa3D0JQ94gscjEtilCncmrCGRQmh9tfGtK%2B%2FxmzVFWNrznxzzvN1OvKP5sDv31yibStJnkKDV9FmbhsP2rrwfC5h8cbOydypXLMr1g%2FgSX8dElb79nWZf9YbEkL3zO1AxfRjbEs7jiS65aPShZ4kIbzDOOCAyWjWWgtzzuoIirOeo1lWJw4SaMTEjfsjmjW9utxhXTK4fAdqoaAAfYa202H78hAoxGbdogVAclmdyzZWQO2t8x9NX27O6jC%2Fz9rh%2FOIOwkTGxycpR2XJa5oWGYSBOWFgkwvMOzG18kGOqUBRR6OSi%2FrRAJVXnWUblBlPSFFUaROAT6g3Tugja%2BCHmy3CKMr2l6oR7K%2FBc2LfgOiJ%2Bp%2FTxOWqVJiapKH6EqMfTZcVP%2Bdg%2BC0hbHPgj6dyBgPxjXqBDPlYpPgShlvhcJssj%2FxskaeB2WP3pvA7AA0aPIT6ZAX4JhoCyGvqRm3vKSz6xY%2BHDbUyH1gft36OJThtOQOWpgDGD94IIQCbR8%2BwTevOK4k&X-Amz-Signature=31af8bc505765a2fa32668e976201db0b8816498208a9189c254692d8dac8b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

