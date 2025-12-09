---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VTFPQOR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiwPkUS2WpUk7uNwdqnR%2FKwGAaev3ZsJLInv3qtAv3jAiBkoKkpeNH6FArNKNPr6LTFFWb%2BP0X6hFgxDwGVv%2FH4DiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUdDaVXlFYvgnN%2B2XKtwDk3lVRO4TGcp0fIkPxQGkNg0GFk5SrN3QcJ4Sb%2BQWPJDdExO1iGHZcz3MWcdmOlwkAOamCwXZYNESV89P79k01ab%2BTwUNuX6%2FQgBs64bYyJZR1UgSipWp16Ztn8PMZLxpHf5iB2XBC71fPpsgsHbD%2BvcMcWcXZ4iBSVpcZYsNlcCJQFkR9%2Ft74MSiesEAkElwaNXuFFwzoa9OZ%2BmQ0MwMfNvGjINul036cXltrEekmf5gDl7HDn%2FteMY70nq81Mil342CFdYfsbWGSSw52TAnbIvKSicy02Vdfp74QGLM%2B6P2PBs1FaaijIxOITdyAuuGTGkJyIKn81JvAUlw85lQas11z5suM%2B54e8gexC4yfekSZDBU7H6dcS1dVh4ZlOAuy%2F7fCzmfsGGteOzWcb9XCMGvpWfPJq4NJRaCwwhilAB28k9CYL5dsD2skarlc31cydNE7%2BymVffqW4FaxH%2FHiL1iHp7xcb%2FGZA21Kq0FXupQHUeIFXTDOkhMX7L6E6ESDwgA0aY6vqTLJQpygrL1mVMbQ9X4nx3kFY8OAY6JDgm8tI%2Bf6TphUQv5sFW0LeKzD0BFrQTGalI4Jtg8B9cCtBU6iEuqI%2FYRL7%2Bh6HNMt%2BQ98o8XKDLO97Y41Dwwz43eyQY6pgE06Z37aRf06%2BKLmpfXculcqmEHZHIHGGOuyHIfjYuMDneLTU7M%2F1H%2BjcHtfB676olUwkjHZaWuIp%2B88ZVYUjTpXXqmV2BEg%2FuYEjTOBEYmfP3c2goSwsDI8Jyigh%2Bz1oSyQ039Gl0TlVsF4gBpFJLa%2FupglUpWia1zeYRQUA0xNfwLOgvDRGCk6TKuzpXIG%2FspgzcjS34CQZiWlP%2BdgIj0y92NDveg&X-Amz-Signature=c2f33312719adcb7ef58e106abcadb0deda895370ba68f549fc5093f09b8dba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VTFPQOR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiwPkUS2WpUk7uNwdqnR%2FKwGAaev3ZsJLInv3qtAv3jAiBkoKkpeNH6FArNKNPr6LTFFWb%2BP0X6hFgxDwGVv%2FH4DiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUdDaVXlFYvgnN%2B2XKtwDk3lVRO4TGcp0fIkPxQGkNg0GFk5SrN3QcJ4Sb%2BQWPJDdExO1iGHZcz3MWcdmOlwkAOamCwXZYNESV89P79k01ab%2BTwUNuX6%2FQgBs64bYyJZR1UgSipWp16Ztn8PMZLxpHf5iB2XBC71fPpsgsHbD%2BvcMcWcXZ4iBSVpcZYsNlcCJQFkR9%2Ft74MSiesEAkElwaNXuFFwzoa9OZ%2BmQ0MwMfNvGjINul036cXltrEekmf5gDl7HDn%2FteMY70nq81Mil342CFdYfsbWGSSw52TAnbIvKSicy02Vdfp74QGLM%2B6P2PBs1FaaijIxOITdyAuuGTGkJyIKn81JvAUlw85lQas11z5suM%2B54e8gexC4yfekSZDBU7H6dcS1dVh4ZlOAuy%2F7fCzmfsGGteOzWcb9XCMGvpWfPJq4NJRaCwwhilAB28k9CYL5dsD2skarlc31cydNE7%2BymVffqW4FaxH%2FHiL1iHp7xcb%2FGZA21Kq0FXupQHUeIFXTDOkhMX7L6E6ESDwgA0aY6vqTLJQpygrL1mVMbQ9X4nx3kFY8OAY6JDgm8tI%2Bf6TphUQv5sFW0LeKzD0BFrQTGalI4Jtg8B9cCtBU6iEuqI%2FYRL7%2Bh6HNMt%2BQ98o8XKDLO97Y41Dwwz43eyQY6pgE06Z37aRf06%2BKLmpfXculcqmEHZHIHGGOuyHIfjYuMDneLTU7M%2F1H%2BjcHtfB676olUwkjHZaWuIp%2B88ZVYUjTpXXqmV2BEg%2FuYEjTOBEYmfP3c2goSwsDI8Jyigh%2Bz1oSyQ039Gl0TlVsF4gBpFJLa%2FupglUpWia1zeYRQUA0xNfwLOgvDRGCk6TKuzpXIG%2FspgzcjS34CQZiWlP%2BdgIj0y92NDveg&X-Amz-Signature=2e960c2f1fe4c504dc286366c220dee5fea143ea44882725789eea07c07405bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

