---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STYJCFA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0FAiVT8pgPitZIj7vNek6dCgn7SWSoFbHtRcqt1ClACIQD5rY9XNTOjphxs2wL%2FNO0h4fPwzq7yP%2B1x147lSikctSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMd%2B%2FNtIKJmL15mH1vKtwDG5d1UtfgqNOrxBIMEDcXDzbKVoR0Msh8MwQogkyJ2WtzGqVAB1z2YRclxm%2F63cNnzipOYW18d9H3s%2BQMrAPOjycx4NydxhUBdwDsom0EPMPw66Vdh41nN1%2F7nhU7NKLhxIfHY22ZlYSfIS6hzBZ%2FL2MbGG%2Fu7Jvy93RCEruWTYjcTPHEDBad7TEhPQHXtzlRZckHkOTG4oHzaDf4Hg1ut8AIMsuJXA7r38GiMlChccmbKUEtD3nuEtislEA7VSD%2BEwpKZZ8fDHx57JK5rlzQr9lXhrEM96S0NGnfbUf4%2FxVflpTR3mk1Mw2RHDDxfTGUvyRwfoPr4J%2FSqwOzvr%2BfyB2BrfeOiTUoOE796m3zduKSzLvOM8vF7jtaYIxbYtr7TDdFapzZGQmZ%2FsGqElDgqeLk%2BqR5PwXzLELDY81S0fIj%2FveydOtY5ow1FTEpxO7u56zbJqu8%2FZ7DuMfANkEc1s2Wn4aZyu07DD%2B%2FZ4B00rSF13uMyogjax2MST96u2euET2wZGDJJVLGmWzwQ1aDUHBNbCCd%2FKLOhO%2FfgjNo0F0rxHLarVRY2WqkoXHc%2Fwtlsp4ZTKkQp9qbt0Ruv%2Bq%2FV9dlPVEwWwhXtPKDJfvA8nMBF73zCbfvokMuuPYwqMPKyQY6pgEq2U4CPJzaRkJz4jyzWlMl4sBaJJxI91tOaClGskKgpjKsB9CW9dK56LW0MneyXbiAGo%2BQbrv6mOvRrBzjzPiz2yBqom4XMrHxMMa2gzsAX7LN95WQZVg%2BQNffiydBsjfs5xegHbCrJbMzL%2FpqC4sYZDVHa1RP0ux%2FXrGgsIWRwyBqaW2aMyF3CaLg2ZdXWcjKdDpYfFqkUiw4Uqu%2BRCEFfQ9PUojy&X-Amz-Signature=73b73effd97bcb08c9ecca609bb14a0c1746c5b269d810e7ea8b837805a431dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STYJCFA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0FAiVT8pgPitZIj7vNek6dCgn7SWSoFbHtRcqt1ClACIQD5rY9XNTOjphxs2wL%2FNO0h4fPwzq7yP%2B1x147lSikctSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMd%2B%2FNtIKJmL15mH1vKtwDG5d1UtfgqNOrxBIMEDcXDzbKVoR0Msh8MwQogkyJ2WtzGqVAB1z2YRclxm%2F63cNnzipOYW18d9H3s%2BQMrAPOjycx4NydxhUBdwDsom0EPMPw66Vdh41nN1%2F7nhU7NKLhxIfHY22ZlYSfIS6hzBZ%2FL2MbGG%2Fu7Jvy93RCEruWTYjcTPHEDBad7TEhPQHXtzlRZckHkOTG4oHzaDf4Hg1ut8AIMsuJXA7r38GiMlChccmbKUEtD3nuEtislEA7VSD%2BEwpKZZ8fDHx57JK5rlzQr9lXhrEM96S0NGnfbUf4%2FxVflpTR3mk1Mw2RHDDxfTGUvyRwfoPr4J%2FSqwOzvr%2BfyB2BrfeOiTUoOE796m3zduKSzLvOM8vF7jtaYIxbYtr7TDdFapzZGQmZ%2FsGqElDgqeLk%2BqR5PwXzLELDY81S0fIj%2FveydOtY5ow1FTEpxO7u56zbJqu8%2FZ7DuMfANkEc1s2Wn4aZyu07DD%2B%2FZ4B00rSF13uMyogjax2MST96u2euET2wZGDJJVLGmWzwQ1aDUHBNbCCd%2FKLOhO%2FfgjNo0F0rxHLarVRY2WqkoXHc%2Fwtlsp4ZTKkQp9qbt0Ruv%2Bq%2FV9dlPVEwWwhXtPKDJfvA8nMBF73zCbfvokMuuPYwqMPKyQY6pgEq2U4CPJzaRkJz4jyzWlMl4sBaJJxI91tOaClGskKgpjKsB9CW9dK56LW0MneyXbiAGo%2BQbrv6mOvRrBzjzPiz2yBqom4XMrHxMMa2gzsAX7LN95WQZVg%2BQNffiydBsjfs5xegHbCrJbMzL%2FpqC4sYZDVHa1RP0ux%2FXrGgsIWRwyBqaW2aMyF3CaLg2ZdXWcjKdDpYfFqkUiw4Uqu%2BRCEFfQ9PUojy&X-Amz-Signature=08dba80ce2be8976affbdbf870aeca13467dce3c87f4ef95ee250e3e8f36bda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

