---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZME6OQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOdm1trOMcpeFaMSzYhSoqRK4EtsKSEbao%2FG6q08F8NAiEAsc49l7K01N2JxNkXYKntNnHih1s%2B4F2siK2%2BsBYL2FgqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0HcpvOh7bZjS2R5CrcAzvJZQhXsr%2FxTMJpH%2BpFUptn7arjsZbZQTOMnH5pwT9k1RL%2BuCRdCU7kuMWYkIqCvcV1KkGvHQGwNm4zN0T%2BJ51R%2BKMnwzpg7897j4F9G0QBLxmIDmWLACLV%2FR52%2Bj%2FqA5wCUv8wMBKnMgiMhODKU44rnOvELXwivfMDX6J0caHaRA13Rg5iMIvmgul2jzETI1gqSv%2B%2BuxwQJ%2FrUlbVcGBp8BD%2BYv5U0p9Cb7m3oVoRa%2B42eDPRfKjFKkEcurxb4Y9pqOtO47oGLz3idxRjO8foOHyAbZMT6V2hwu0YlNQG7%2BPiQV7TYWGPSDP451B60g5pFF7Ki0qnQkYSFfSet1%2FD8yhbyNofbVkgYHfC4tLyGNLHstC6n988o3TZeqR9YbQKs4DNcx75mDR5%2FqM%2Fscq4yjCdOQ7kvzFQd7ZXxOwbTiSZSqpDcejdVR9QeAeC6xpfkun7lxzP6BU2HchD%2BlO5R88osmi7Olf72Wk9Nie%2F4YVFvKTIl0i43adz7q0xjYyl%2FZsLVw3q9NiFiKk4Td%2BdL9MGh86WlRayWwwy8BREQkIWnM5E33gLAYjEDtWyeRi2BLEdDWvTV76a4wkyVtLcJ5KfoW2EB3hwI1v%2F51xW%2FCb1YR0hZ9b6A5GPgML3J3skGOqUBR%2B668XVxcxWQbN8zLvaSuCuLGGKxVE0bKvAfUW2mgmJiBUywu7EqZa7GNNfOeg0j9YAnyX5oSuPVjmyE5SulUGJPMvKgAxeRCt5EJ72VfvEJT2ewygnlWDmYghQKmLl9kD%2BI2zXpRdyWaW1FU35%2F87O6lIfUXuIGw8aDougMJd%2FeQdS5wE1gk9TTbAci7rXMgW%2BzOFD6FqHadN5vTK%2Bb%2FgclBY2A&X-Amz-Signature=9c90efde91f35fa7d3a173c6289de388442b9962bc75ad118c4af7ade52b1af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZME6OQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOdm1trOMcpeFaMSzYhSoqRK4EtsKSEbao%2FG6q08F8NAiEAsc49l7K01N2JxNkXYKntNnHih1s%2B4F2siK2%2BsBYL2FgqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0HcpvOh7bZjS2R5CrcAzvJZQhXsr%2FxTMJpH%2BpFUptn7arjsZbZQTOMnH5pwT9k1RL%2BuCRdCU7kuMWYkIqCvcV1KkGvHQGwNm4zN0T%2BJ51R%2BKMnwzpg7897j4F9G0QBLxmIDmWLACLV%2FR52%2Bj%2FqA5wCUv8wMBKnMgiMhODKU44rnOvELXwivfMDX6J0caHaRA13Rg5iMIvmgul2jzETI1gqSv%2B%2BuxwQJ%2FrUlbVcGBp8BD%2BYv5U0p9Cb7m3oVoRa%2B42eDPRfKjFKkEcurxb4Y9pqOtO47oGLz3idxRjO8foOHyAbZMT6V2hwu0YlNQG7%2BPiQV7TYWGPSDP451B60g5pFF7Ki0qnQkYSFfSet1%2FD8yhbyNofbVkgYHfC4tLyGNLHstC6n988o3TZeqR9YbQKs4DNcx75mDR5%2FqM%2Fscq4yjCdOQ7kvzFQd7ZXxOwbTiSZSqpDcejdVR9QeAeC6xpfkun7lxzP6BU2HchD%2BlO5R88osmi7Olf72Wk9Nie%2F4YVFvKTIl0i43adz7q0xjYyl%2FZsLVw3q9NiFiKk4Td%2BdL9MGh86WlRayWwwy8BREQkIWnM5E33gLAYjEDtWyeRi2BLEdDWvTV76a4wkyVtLcJ5KfoW2EB3hwI1v%2F51xW%2FCb1YR0hZ9b6A5GPgML3J3skGOqUBR%2B668XVxcxWQbN8zLvaSuCuLGGKxVE0bKvAfUW2mgmJiBUywu7EqZa7GNNfOeg0j9YAnyX5oSuPVjmyE5SulUGJPMvKgAxeRCt5EJ72VfvEJT2ewygnlWDmYghQKmLl9kD%2BI2zXpRdyWaW1FU35%2F87O6lIfUXuIGw8aDougMJd%2FeQdS5wE1gk9TTbAci7rXMgW%2BzOFD6FqHadN5vTK%2Bb%2FgclBY2A&X-Amz-Signature=58a83f6692661c6ec5313374c133253dced1c8527647781e2663cd376e3c6c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

