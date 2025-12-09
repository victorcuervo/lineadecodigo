---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HTQNF7A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUiqYCykdZrsq%2FulfH%2B5pR7TFlTGDGlN5lu2bNTrfglQIgC1xy8ZiwqnMCUmSzaJcYUOoBC5I%2F4OmKiUWXce89KSoqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNy%2BUd3HLHXaKcnlCrcA8xW3mLCyph4rb1HdvGbFvl8zWYNr5rBmiETLOEssET%2BgQF31f3mhd%2BkRLyUFGtDOOhsFtys3JhketAOLD003y%2FRo2sAJ8O%2F8Nmas65PGbVvFyCJEoiaxK9p3HA7ckwXFSMpVmwsPdg6DQgwGSXKq8Xr%2FWX%2FNP1GNkp%2BlQs8cIEG9pI4xCpy7sW4R5GFW7G7GqSByYNsECnoJo1XQlSe9C34tGl%2BrCqb4mwO4ilbhVXkAOPAc6FG86dZ2k8X2riKBM1bLHPCSW74G8CIgqRykYmgYXGIsMGkT6%2FrsObJNsiO6EazJCli94SLMov6r%2FXMkeOjJ8YCK8awk57lFb1IxYNdkPDbT63m4%2BDJ7sid4%2BfP1Hg7ogFw7ACSgCLw4NqEQuBHJde%2FkhP0ftZ%2FiiDvJ%2Big1EVw8LdiTVMnk37DRSSaLmLwLAi9h5abkRZ8Nd%2Be33qzERUYRKja%2BPEq%2B3rq3Q0eCOajIVwwl6mGqMps0LSY1LLgd%2FFecYHOH%2FMGPvvx%2BUMD8oiTDllBgHCkI53kKJiEUzOgcZPFMn3k4wEgZd3hyZf4D9WMcJO7ciEE2SQUpH3PqzdlTkkodNIALOdbU1N4CmEUjU5%2BcDGhHvGBbNOYR2%2BT6PY18%2Bx%2FeiEnMLiI38kGOqUB213R%2Bi%2Bn%2F%2FAsypSml4foqR6zuPdwISTfmhwOGSod60Dq0hrS0maysQ%2BMfODx6xkupzUQW%2B4Kva%2BfGDVpniqcg6jx7bP4LMzziHRU5ifkY04Ghpyks2rXcsIVc4Tj287yBTHZnNVKYPDcJyVB7WaPB33QEbYbs8y4zGAzF7cAG3NzWmqU2rwlRzMSflHf7yBypGlaA7VaCkaBeQjJ12nyBWY48MuX&X-Amz-Signature=a1812dae182a31da640b4908704adda7d2050c6b3aaba4cda6dbc79d48c558c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HTQNF7A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUiqYCykdZrsq%2FulfH%2B5pR7TFlTGDGlN5lu2bNTrfglQIgC1xy8ZiwqnMCUmSzaJcYUOoBC5I%2F4OmKiUWXce89KSoqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNy%2BUd3HLHXaKcnlCrcA8xW3mLCyph4rb1HdvGbFvl8zWYNr5rBmiETLOEssET%2BgQF31f3mhd%2BkRLyUFGtDOOhsFtys3JhketAOLD003y%2FRo2sAJ8O%2F8Nmas65PGbVvFyCJEoiaxK9p3HA7ckwXFSMpVmwsPdg6DQgwGSXKq8Xr%2FWX%2FNP1GNkp%2BlQs8cIEG9pI4xCpy7sW4R5GFW7G7GqSByYNsECnoJo1XQlSe9C34tGl%2BrCqb4mwO4ilbhVXkAOPAc6FG86dZ2k8X2riKBM1bLHPCSW74G8CIgqRykYmgYXGIsMGkT6%2FrsObJNsiO6EazJCli94SLMov6r%2FXMkeOjJ8YCK8awk57lFb1IxYNdkPDbT63m4%2BDJ7sid4%2BfP1Hg7ogFw7ACSgCLw4NqEQuBHJde%2FkhP0ftZ%2FiiDvJ%2Big1EVw8LdiTVMnk37DRSSaLmLwLAi9h5abkRZ8Nd%2Be33qzERUYRKja%2BPEq%2B3rq3Q0eCOajIVwwl6mGqMps0LSY1LLgd%2FFecYHOH%2FMGPvvx%2BUMD8oiTDllBgHCkI53kKJiEUzOgcZPFMn3k4wEgZd3hyZf4D9WMcJO7ciEE2SQUpH3PqzdlTkkodNIALOdbU1N4CmEUjU5%2BcDGhHvGBbNOYR2%2BT6PY18%2Bx%2FeiEnMLiI38kGOqUB213R%2Bi%2Bn%2F%2FAsypSml4foqR6zuPdwISTfmhwOGSod60Dq0hrS0maysQ%2BMfODx6xkupzUQW%2B4Kva%2BfGDVpniqcg6jx7bP4LMzziHRU5ifkY04Ghpyks2rXcsIVc4Tj287yBTHZnNVKYPDcJyVB7WaPB33QEbYbs8y4zGAzF7cAG3NzWmqU2rwlRzMSflHf7yBypGlaA7VaCkaBeQjJ12nyBWY48MuX&X-Amz-Signature=b1302496821a6688f5ed631ae2e4df0e74c52e89ebbcff9afa109b4ecea1db8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

