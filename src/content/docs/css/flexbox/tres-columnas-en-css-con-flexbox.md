---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AMITGAD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc8zuH%2F48zSUdWYoUHusfurgip%2FKVsXq%2FvXPT1oiVWhAIhAII1%2FWZjLPiArm1ZQOnqFmnlGV03JokoNEV0k17CNEo0Kv8DCE8QABoMNjM3NDIzMTgzODA1IgwuCa3s0GwULf2XzFUq3ANup20sS494OakKHgMJKUYTU1Y4t2EMe72rtchHPCC9Xn%2FxqAvDjfBNaIzwWQ82tZS1eRRC%2Fpjj7T3ap2aWXJcqkh%2Bw01nEx317df9mGJM5BhavXB3ntZTfaDBG4hQcUE9boJ%2BfJM0F%2BfM1CKt9h82soDEkHuC9sUycwjYdweh78hDghN3zlvDtYfKfHuGD4aqXpuB5DzMFZXPYTdgqGCfLZvfuaRnTEm34AcaIP9wHJVVwF%2FnGpkaE%2BPBJ19DB66PNKd7jY%2BbCN5%2BtomScZUv3hPx%2BDthw8nmE46EYgno3SzfluRByrAULUq68KmZiDZlR%2Bf%2FJw2Iq6Km9mLIsGjRuCBVSD8IsTQtvNWqUgjrH52Q6tIN9iGOFx8eozVO0Ihr3yTrcsP30oVb51atL%2BG%2FnrCU%2B5EhfQgV%2BPQwusTh4Ky1MKgFDDMSwe6OdycjwrYBUlBzset7WN0anO4%2BwkJmF5hYVyoaAO%2F4XXQw7s1ZubaLgwPWnhXX1%2BSlNxtZjySC9OeCpL%2Bh69va%2BW9v7haFu3rCOBN4c4XbxlvrqZhsy4Ec1NMTdNpqZ84erE9Eog%2B7Fm0%2BhGWcnYZEs2R4uUZHLH2eYWdMQl87j0O9Hk%2FElYC0pGHfNz%2FNvr5HnwTDtjMjJBjqkAaYfhAPWiq%2BXIWrt5PtEnJD10jMQBKzBwZ6VHG5CNbsC0qC0iDwnRz3GbX3MCz0WSq7m0rf0fQJFx697cqwv8t16lK8r8oj3PmEANfTrjdRWU1mAsA1Hsd1iUrNCV1q0LwPCtS78IJ5HDtf4WhTgJ6Kqixv5BgGRBCjU4RqmhOBd4iIvbIa0OpnJgb18W%2Fb1o3LUqR1CXbZrQ6Ue%2FJj%2F47obEosU&X-Amz-Signature=f59504224b381e4c4b8843b97b63a65b2aff42b28da76c3d63584df4ea520274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AMITGAD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc8zuH%2F48zSUdWYoUHusfurgip%2FKVsXq%2FvXPT1oiVWhAIhAII1%2FWZjLPiArm1ZQOnqFmnlGV03JokoNEV0k17CNEo0Kv8DCE8QABoMNjM3NDIzMTgzODA1IgwuCa3s0GwULf2XzFUq3ANup20sS494OakKHgMJKUYTU1Y4t2EMe72rtchHPCC9Xn%2FxqAvDjfBNaIzwWQ82tZS1eRRC%2Fpjj7T3ap2aWXJcqkh%2Bw01nEx317df9mGJM5BhavXB3ntZTfaDBG4hQcUE9boJ%2BfJM0F%2BfM1CKt9h82soDEkHuC9sUycwjYdweh78hDghN3zlvDtYfKfHuGD4aqXpuB5DzMFZXPYTdgqGCfLZvfuaRnTEm34AcaIP9wHJVVwF%2FnGpkaE%2BPBJ19DB66PNKd7jY%2BbCN5%2BtomScZUv3hPx%2BDthw8nmE46EYgno3SzfluRByrAULUq68KmZiDZlR%2Bf%2FJw2Iq6Km9mLIsGjRuCBVSD8IsTQtvNWqUgjrH52Q6tIN9iGOFx8eozVO0Ihr3yTrcsP30oVb51atL%2BG%2FnrCU%2B5EhfQgV%2BPQwusTh4Ky1MKgFDDMSwe6OdycjwrYBUlBzset7WN0anO4%2BwkJmF5hYVyoaAO%2F4XXQw7s1ZubaLgwPWnhXX1%2BSlNxtZjySC9OeCpL%2Bh69va%2BW9v7haFu3rCOBN4c4XbxlvrqZhsy4Ec1NMTdNpqZ84erE9Eog%2B7Fm0%2BhGWcnYZEs2R4uUZHLH2eYWdMQl87j0O9Hk%2FElYC0pGHfNz%2FNvr5HnwTDtjMjJBjqkAaYfhAPWiq%2BXIWrt5PtEnJD10jMQBKzBwZ6VHG5CNbsC0qC0iDwnRz3GbX3MCz0WSq7m0rf0fQJFx697cqwv8t16lK8r8oj3PmEANfTrjdRWU1mAsA1Hsd1iUrNCV1q0LwPCtS78IJ5HDtf4WhTgJ6Kqixv5BgGRBCjU4RqmhOBd4iIvbIa0OpnJgb18W%2Fb1o3LUqR1CXbZrQ6Ue%2FJj%2F47obEosU&X-Amz-Signature=11fa8c8ab1c4a215a03fd7e1d284b41078f58bdc185b8be97932d0a62b901d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

