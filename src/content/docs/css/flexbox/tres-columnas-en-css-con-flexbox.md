---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHO6VYR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6okQsH12An3JpSBacK2dehP%2BOt5K%2Fi7%2Fnzr21DGYDsAIhAItTL668KHBFY1PniN542Aibmq%2FmTWH9VgY6pUDOUpJdKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B%2FoFLqhPdnQV23gsq3APULUeg6RPaF7dxFPB4wX18L74avlI9iDStTMxtei%2BXcQq0GXCU8cK4eKTPfgxWNWtpmajNLDN7g21p9f5cnub5TXViPj5ZYtncgVWq8cbrb8pMgAivJEl7V2Wdnxho2FSRYZrHR8gSqGYIgU4N2XxoGE0AJ8rFuyrbYe85AoF25MF7LtO0G5qSXUwJqwxxJ2egVHuN1ubIhsKWw9sw5X5QT%2BIVwAqNXk0dUs80JsA82WyNVmQma8xpjWv%2FzviZbPLqF4745fUU%2FjZPJFcqOCWkdn1Fc6oPo%2FEZPJt%2B76%2FMnA2VvZ55AV5J6ThHfh8Vs2EbmgFMuHgAI%2Fd%2FeqnELO5SB7a7EzOwF%2BV6YKCGUxQ9BVZO6inYcWeFyOY%2FQEc0Ch2fi9l7jKa0%2FrM33803fMSPA17CvZ5Prv0OjWuUeWzKMQbSPJqm%2FqcEHoOvfGCbemNo6XMbvptv6QoplKFTU9La%2FrVvediBjI2wwSg0JhVJhhJUQ6lNYqT%2BpdpIeHdD9XUREPH0SZRnBjdsKFpCSsKxueXGu9Ncv5Wo0Wy%2B5FWQnEvIAqQdcKlct723Y1bPygWXXwweM7T7CqeHf%2F3loGOd7aRPNu891%2Bl4FnI4SX0uAMh2ANZuxgvlJlgr5TCEndTJBjqkAf7G0Oz4vfmlbEUT6ZWRSnSi69iESUZVdWibo%2BjOINUjtLSd1TQCBWL%2FigfjHj0Jomys0p34RSsJIDIIgxrZcNdyDS9Ypvu9TGLFT%2FRuyszVISBxPCFmAZwdgwkyYLOcbJy6PPO4LPucQZuNyHuH7kIQ7YIriCnnYu4yfFaP8oTqPgzgQTO6WENk5ThYQA%2BOwIjCup4W4Bb8paxGJ6xSvMda3Op9&X-Amz-Signature=39dbdbf0d4b6a955d6447286b32ce11657059cb8f4a336ed6cbfb37819d61e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHO6VYR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6okQsH12An3JpSBacK2dehP%2BOt5K%2Fi7%2Fnzr21DGYDsAIhAItTL668KHBFY1PniN542Aibmq%2FmTWH9VgY6pUDOUpJdKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B%2FoFLqhPdnQV23gsq3APULUeg6RPaF7dxFPB4wX18L74avlI9iDStTMxtei%2BXcQq0GXCU8cK4eKTPfgxWNWtpmajNLDN7g21p9f5cnub5TXViPj5ZYtncgVWq8cbrb8pMgAivJEl7V2Wdnxho2FSRYZrHR8gSqGYIgU4N2XxoGE0AJ8rFuyrbYe85AoF25MF7LtO0G5qSXUwJqwxxJ2egVHuN1ubIhsKWw9sw5X5QT%2BIVwAqNXk0dUs80JsA82WyNVmQma8xpjWv%2FzviZbPLqF4745fUU%2FjZPJFcqOCWkdn1Fc6oPo%2FEZPJt%2B76%2FMnA2VvZ55AV5J6ThHfh8Vs2EbmgFMuHgAI%2Fd%2FeqnELO5SB7a7EzOwF%2BV6YKCGUxQ9BVZO6inYcWeFyOY%2FQEc0Ch2fi9l7jKa0%2FrM33803fMSPA17CvZ5Prv0OjWuUeWzKMQbSPJqm%2FqcEHoOvfGCbemNo6XMbvptv6QoplKFTU9La%2FrVvediBjI2wwSg0JhVJhhJUQ6lNYqT%2BpdpIeHdD9XUREPH0SZRnBjdsKFpCSsKxueXGu9Ncv5Wo0Wy%2B5FWQnEvIAqQdcKlct723Y1bPygWXXwweM7T7CqeHf%2F3loGOd7aRPNu891%2Bl4FnI4SX0uAMh2ANZuxgvlJlgr5TCEndTJBjqkAf7G0Oz4vfmlbEUT6ZWRSnSi69iESUZVdWibo%2BjOINUjtLSd1TQCBWL%2FigfjHj0Jomys0p34RSsJIDIIgxrZcNdyDS9Ypvu9TGLFT%2FRuyszVISBxPCFmAZwdgwkyYLOcbJy6PPO4LPucQZuNyHuH7kIQ7YIriCnnYu4yfFaP8oTqPgzgQTO6WENk5ThYQA%2BOwIjCup4W4Bb8paxGJ6xSvMda3Op9&X-Amz-Signature=8c3ddb89f5f0984318ed23f9f43240eb3d215c982852e88d1a4cfb26830a6f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

