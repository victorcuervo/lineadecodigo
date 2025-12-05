---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BAOKTWY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCItcyRK1Tsrq%2BbeuWzTgKqVARbQszhmJ7gl9munH%2Bp2gIgFohQZbpY1Uwn0SOEtvg5a2b%2FFEmFEjgcznEgJmlLQwMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFEdHm%2BSH0iPFCwcoyrcA%2BvyfVbA3D908gSRG6zSlBEdepzJJJAIRX3SRL0Ip2tUp3nKdbwI%2FwFKLn8hLhgeZtB2qGxlGjohBgBEt1epkExoIng%2FDsPuQkaS4Ce5tCDFxASIaf%2F2VxhV0QK4jQZCYLCwnfFVuPPpTwLt4ffnyqeATkh1TZ9S%2FZJ6xJbNO8GZAIK21JbVISkAUdO%2Bm0%2BClQoqur3aJecSG746WYPxEVIFtmL41YXpcEokXWZAHr2jT0IHyH9TvAao31DUqgeH3UC%2BYdLFfOWoTcI%2Fgs7pGbogOhuFEB7TbngCuW9urbx%2FNqipzUn891RGN2mXWshZ21v%2FT8%2FSKOfEzm1geRh%2FlIzpz%2FsiCc8bGl2G8ExcYaEAU2fss%2Ffn1a1tLR541C9C9%2BHcfeLH4UyBDHR%2Bw7fQ0921KqIHX7K483w9ruuovDAtizBejhrZEA0i3DY8Z6ATGarPY0wTxy0OlojAen3ii3ezOx6Qry4HFWMYh4bZwiRPtZNNublYY%2FcGth3HUnJxAMtw4II9knosw5ufsRRlkTmVjF84UuiWcmsvVI52kOv81vX00SvA7LiS7OxGtT6EbQTtRcPSbMBLqBI%2BU7FxjuppbNfDyFf%2FKPyMKpKkP1N29e1TVGQ5DAmLpHZIMPCMyMkGOqUBe2Lfch0jwQAhj65ApytZzRu1iUyIYiblJWyMADGTyG9XMXpa5smoqQblO6G3pOFSPSvnYQdAfy0r81nYPy5Pum7dkJHtSzYo9SG7iSmZJXsj3jQy%2FnQA%2FjvREf7F4qKzD667%2Ba18xQPtLvE4R3PPee7Yi2hlI8Nbl5cGx%2FDYTfdauTQMyYXpbIQE3LI7F3nHHPKORBVOXBaaqwtzQCeDnylXpOKA&X-Amz-Signature=fc13d59ae09127a4df79f7cfd9b3b3e4e2672154027c2f4af9a02283623bac3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BAOKTWY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCItcyRK1Tsrq%2BbeuWzTgKqVARbQszhmJ7gl9munH%2Bp2gIgFohQZbpY1Uwn0SOEtvg5a2b%2FFEmFEjgcznEgJmlLQwMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFEdHm%2BSH0iPFCwcoyrcA%2BvyfVbA3D908gSRG6zSlBEdepzJJJAIRX3SRL0Ip2tUp3nKdbwI%2FwFKLn8hLhgeZtB2qGxlGjohBgBEt1epkExoIng%2FDsPuQkaS4Ce5tCDFxASIaf%2F2VxhV0QK4jQZCYLCwnfFVuPPpTwLt4ffnyqeATkh1TZ9S%2FZJ6xJbNO8GZAIK21JbVISkAUdO%2Bm0%2BClQoqur3aJecSG746WYPxEVIFtmL41YXpcEokXWZAHr2jT0IHyH9TvAao31DUqgeH3UC%2BYdLFfOWoTcI%2Fgs7pGbogOhuFEB7TbngCuW9urbx%2FNqipzUn891RGN2mXWshZ21v%2FT8%2FSKOfEzm1geRh%2FlIzpz%2FsiCc8bGl2G8ExcYaEAU2fss%2Ffn1a1tLR541C9C9%2BHcfeLH4UyBDHR%2Bw7fQ0921KqIHX7K483w9ruuovDAtizBejhrZEA0i3DY8Z6ATGarPY0wTxy0OlojAen3ii3ezOx6Qry4HFWMYh4bZwiRPtZNNublYY%2FcGth3HUnJxAMtw4II9knosw5ufsRRlkTmVjF84UuiWcmsvVI52kOv81vX00SvA7LiS7OxGtT6EbQTtRcPSbMBLqBI%2BU7FxjuppbNfDyFf%2FKPyMKpKkP1N29e1TVGQ5DAmLpHZIMPCMyMkGOqUBe2Lfch0jwQAhj65ApytZzRu1iUyIYiblJWyMADGTyG9XMXpa5smoqQblO6G3pOFSPSvnYQdAfy0r81nYPy5Pum7dkJHtSzYo9SG7iSmZJXsj3jQy%2FnQA%2FjvREf7F4qKzD667%2Ba18xQPtLvE4R3PPee7Yi2hlI8Nbl5cGx%2FDYTfdauTQMyYXpbIQE3LI7F3nHHPKORBVOXBaaqwtzQCeDnylXpOKA&X-Amz-Signature=ce4cd57b8c6da39726e624d5da89158f6ee703067476642d538defc168adf2a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

