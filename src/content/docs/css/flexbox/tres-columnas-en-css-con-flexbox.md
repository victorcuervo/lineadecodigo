---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBKLKNR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFwj7HcVJGc0%2FrN10ttAYHCPaVAVyO24bBhzQ0j2ax%2FAiEAv471ErNnsrzBqVPvzwyPtCBTYk3yjL4xfdgIpt7mcnUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOoJ%2FlbzPeHspCEfOircA2AKk7rhMIUtqJD856f47s8znznce%2FbDfnC%2FitHZrQN5RN20tjy7%2BrbSaDLmD1%2FeYJypOS%2B5Wj8%2FseKPr2ZBXIgfdJShADRH74SJGbQ98Av4EFHBwxqMRs4cSeuGQGPnvlNQcUhvpZRaeaTiSYUhhhzNn0Z3ngO0TUEi68PpGYVqx6PTtyuwmi0VqolLQUfXfWstKdDwdKtEYqWv2ZDa1QOQrLjA%2BCTO7Yqv0igZFhQnxiAvYhCnactIOFge5qAxMchrj7hp2DCpOxm2h9A2D0Rac6Y2%2Fl8MpfJ18zoQrXknaskhzZCSiP1I%2Bva0rQ%2FRD4oOmw%2Fx22w35V2ByVFeUVWq5UxLZQuvzDIHQ7DUfDe4oJIVZX%2FQ016REDME%2BL3P%2B7loFtFToA7nzgMyqrYaB0u7zQ1WvqOiEU4feD784rD1hGNsYHSF2LOEGBLeWNwcCYQJbqjUZwDYOoEURe%2B5AU2p%2BuZaaMA0%2FzhNrCR82WQfXlJJ4to1oKlUHVl7Qud2DEXgMqv1Q9wvX%2FREes9xU4FOYIfKShzbvsf%2BWHYQZrpbnS%2BBsYMCBWXWkFNc268b4C74wg7eGFA6Rn0WLOkU5u1AJpZUv1MtBbofvcMt7m8BNNDnvMSP7vnXYjWlMMqyyckGOqUB3BdnYr1Wz1FaT7NRuI3fv66WoBvFegW5R3BZheihj39O%2B5eY7OQJWXxJCFOfRJgjh52NFb03tmvqhhN%2ByqLHPBE3YkMSnyMvGHvUC6QWCV%2F3cLNxHxA0MCCmY4X%2FVczMKGxO%2BgfKFZr7wTqs0hApBE1yd8tHU7Nh99obi54s%2BZ31iSmNx%2BB71kPh7gzLQ6DvOssD%2FCk3MXjwvhz6xF83ZtmQqkjM&X-Amz-Signature=4ae7da63f92c65924af9f7b2c46c99d150968a64b78cb6eaf661ffdedb2c192f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBKLKNR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFwj7HcVJGc0%2FrN10ttAYHCPaVAVyO24bBhzQ0j2ax%2FAiEAv471ErNnsrzBqVPvzwyPtCBTYk3yjL4xfdgIpt7mcnUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOoJ%2FlbzPeHspCEfOircA2AKk7rhMIUtqJD856f47s8znznce%2FbDfnC%2FitHZrQN5RN20tjy7%2BrbSaDLmD1%2FeYJypOS%2B5Wj8%2FseKPr2ZBXIgfdJShADRH74SJGbQ98Av4EFHBwxqMRs4cSeuGQGPnvlNQcUhvpZRaeaTiSYUhhhzNn0Z3ngO0TUEi68PpGYVqx6PTtyuwmi0VqolLQUfXfWstKdDwdKtEYqWv2ZDa1QOQrLjA%2BCTO7Yqv0igZFhQnxiAvYhCnactIOFge5qAxMchrj7hp2DCpOxm2h9A2D0Rac6Y2%2Fl8MpfJ18zoQrXknaskhzZCSiP1I%2Bva0rQ%2FRD4oOmw%2Fx22w35V2ByVFeUVWq5UxLZQuvzDIHQ7DUfDe4oJIVZX%2FQ016REDME%2BL3P%2B7loFtFToA7nzgMyqrYaB0u7zQ1WvqOiEU4feD784rD1hGNsYHSF2LOEGBLeWNwcCYQJbqjUZwDYOoEURe%2B5AU2p%2BuZaaMA0%2FzhNrCR82WQfXlJJ4to1oKlUHVl7Qud2DEXgMqv1Q9wvX%2FREes9xU4FOYIfKShzbvsf%2BWHYQZrpbnS%2BBsYMCBWXWkFNc268b4C74wg7eGFA6Rn0WLOkU5u1AJpZUv1MtBbofvcMt7m8BNNDnvMSP7vnXYjWlMMqyyckGOqUB3BdnYr1Wz1FaT7NRuI3fv66WoBvFegW5R3BZheihj39O%2B5eY7OQJWXxJCFOfRJgjh52NFb03tmvqhhN%2ByqLHPBE3YkMSnyMvGHvUC6QWCV%2F3cLNxHxA0MCCmY4X%2FVczMKGxO%2BgfKFZr7wTqs0hApBE1yd8tHU7Nh99obi54s%2BZ31iSmNx%2BB71kPh7gzLQ6DvOssD%2FCk3MXjwvhz6xF83ZtmQqkjM&X-Amz-Signature=60f8efa57ab1585f8cc0315d4689398316b4126453e27c986f79679ad86b29c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

