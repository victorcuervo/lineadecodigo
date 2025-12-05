---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYEYHGKV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0yEgyyhmDW6WiwpTgsYOsKNjm9u7r%2Fv3TaB4r5SgZagIgKEvunroN6%2FVdq63prWNNUu1yX8RWnti2Zvcc28GewQsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK1S4iD8XUZOcMzIJyrcA9h2MGPe9rpeGP%2FEwjlwEMRsW6xTBmwoAZU7aMUF%2FYovuvBQE5XvU7dZAuunRohS1%2FKBwA3Kagdvhf3gaQREsVd30Ns%2FCG1nBnuTsZoTCRrzB%2FsHnHUnF7Oygr4F3yixQJhjghRUVcd9hnHAYsvh1u4aMf7ty2HA4HhTxXxarb8rSmci7Pw5G3BLFXeGyvOq3EMxfpG9%2FTglYnVv4of1r5l631ZydlIu9KA1fDY%2BFOSBHtbbTmOy2XmlmToECEvjPl2xwltNg%2BlrpM%2Fn6bRw2s4%2BQHAeK0FsYXKthhfVnDlBjmdVQaSDkTEa4klNY1yPXdE7%2B6qAcRwYgy4C7SOmE2NeUB9mPI3bTezuSLNEuJlllIHRM1vjW7q9uu67gZGRKtMxhOwWiwjtt4%2FTgmXb0z20gNskyGygMeVaD%2FQiz8bA8IWK4FVFq4aY2L727FuwbFBJVZZu3ThPA1SmFnEzkaIvWO5zTEzAsQTtkLEkvMfYuN5fLpwnvpR9SlVWRDndc6YRrpWle5p0b3D09GUG1jz9CJVlfzCVwaWfq5iW30Mkms1v%2BnRxG2l5h9Lmvgd49GwcAjl85pfkmfZ72mjw9T92L7n6sq0a%2FuN2w12WZP%2FcLrNsH3rIsDZBhpXuMK6xyckGOqUB03mOifG5I3HQAlkvWKg%2BPHLSqQQ%2FvCl%2Bm4iK4QOMFjFGDySIi2rjclRRXm7eT%2F0ewhxo9sTp43SlAsLPNM6V9k6LQBwnYMHm0jXcDCTHY%2BCJ%2FbYxlY9bZSTP0z6dpnYza9PPqswNqyec8kyX9LwgMmXeQiBgyC5KPo7%2BOEJY8lsdunWLQZZ4nfpzCRhQZSs4Yc0JIOUce8Hy0kOXLjB0%2F1U0xesf&X-Amz-Signature=7bc75c8f6daf610a1b11e5aa6a65ab893fa6d768aaaea1c66cfef55906858956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYEYHGKV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0yEgyyhmDW6WiwpTgsYOsKNjm9u7r%2Fv3TaB4r5SgZagIgKEvunroN6%2FVdq63prWNNUu1yX8RWnti2Zvcc28GewQsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK1S4iD8XUZOcMzIJyrcA9h2MGPe9rpeGP%2FEwjlwEMRsW6xTBmwoAZU7aMUF%2FYovuvBQE5XvU7dZAuunRohS1%2FKBwA3Kagdvhf3gaQREsVd30Ns%2FCG1nBnuTsZoTCRrzB%2FsHnHUnF7Oygr4F3yixQJhjghRUVcd9hnHAYsvh1u4aMf7ty2HA4HhTxXxarb8rSmci7Pw5G3BLFXeGyvOq3EMxfpG9%2FTglYnVv4of1r5l631ZydlIu9KA1fDY%2BFOSBHtbbTmOy2XmlmToECEvjPl2xwltNg%2BlrpM%2Fn6bRw2s4%2BQHAeK0FsYXKthhfVnDlBjmdVQaSDkTEa4klNY1yPXdE7%2B6qAcRwYgy4C7SOmE2NeUB9mPI3bTezuSLNEuJlllIHRM1vjW7q9uu67gZGRKtMxhOwWiwjtt4%2FTgmXb0z20gNskyGygMeVaD%2FQiz8bA8IWK4FVFq4aY2L727FuwbFBJVZZu3ThPA1SmFnEzkaIvWO5zTEzAsQTtkLEkvMfYuN5fLpwnvpR9SlVWRDndc6YRrpWle5p0b3D09GUG1jz9CJVlfzCVwaWfq5iW30Mkms1v%2BnRxG2l5h9Lmvgd49GwcAjl85pfkmfZ72mjw9T92L7n6sq0a%2FuN2w12WZP%2FcLrNsH3rIsDZBhpXuMK6xyckGOqUB03mOifG5I3HQAlkvWKg%2BPHLSqQQ%2FvCl%2Bm4iK4QOMFjFGDySIi2rjclRRXm7eT%2F0ewhxo9sTp43SlAsLPNM6V9k6LQBwnYMHm0jXcDCTHY%2BCJ%2FbYxlY9bZSTP0z6dpnYza9PPqswNqyec8kyX9LwgMmXeQiBgyC5KPo7%2BOEJY8lsdunWLQZZ4nfpzCRhQZSs4Yc0JIOUce8Hy0kOXLjB0%2F1U0xesf&X-Amz-Signature=c9991182fadb02e3d9cb96dc030a09cc451206f44e6a1172c482b3c73bd116f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

