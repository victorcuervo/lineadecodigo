---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDWMITQQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxNDEG3LtvkS4fBqm1YBA7OgTUCpuuVzaiD14SfiLp3AiA4ylEBzsy1nBHArDcxpOwSdRqLewPp0fl%2BK8tdI%2F26WiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2FYIsO6GQ9c9BjjbKtwDjvgWORIdx%2FOQHPLGP0rP467DtwuND0GvGJBkxTJ9kcF3ebJxufMIHmt8CJ2dnYMJnoEJjq9p%2FoyMDSkgMFpTNXQ2hpL3OS%2FiIxe3XXYOpz46HHz5aONSlOcxq3z80mnKQvEsMssgSm%2Bu5zzs5SRI7H4PrhzxTAeNAkZvFFGJXPyrow9OebKS8Q7dWDZQV%2BSjZH%2FYUN2BUKwfjvyujmFbPBZV1mPkJlKzk%2BbQ0b%2BrTJyuce%2Fgq19YSg5s1Lv%2BwwDOTL7612sZNaRVYcFwrIus5h7nVBdoKmuFToX2F2RiIDAu880jIMFTh94%2FGC03KmbEyPivPRiVHVcHsCka2KCgIZUC2JsYJL0dbCJHUsHGKnBnkuSW4%2F%2BNaklDwFrHaCicX2HfJoZM53lJvox5X92FWjOw0JOHX838cnBDc4s2Oy3bPu%2BZDEfG4IJ5e%2F5weFb8bNb5E0nfzeunf4cdOIX%2BK4Zsw6QVYLAEf70kAxirybEVimp5UxSic9e%2F0Dfg80nXLmUSlrqW96DUm4V1urQ8shwYLWgjVS47gTQtZ6DL6x%2BiWBYRQCca0gV74IN4fgbQ7QKc95%2BMn%2Bf12xhLXm%2BS7%2BFuZQ3I2sda2zG3V5vvTnVYwnDA%2BNDNrYsEzf0wu7TcyQY6pgEgt4vuvP%2BvV00PqoEAJj48TKaTNYDlokPk1k%2BmlelEK5YJpC5R8sYkZrgagjI13UnSoW6Px8UD5LvUq6bioTXBN0nufnqHlqMLhO3g64sOzWB%2BrbC%2BHYdy9RNTQyTrBh%2Bxd6R9r8GhFpkZMsu9hYe%2FzGltRIFASnjyfL6QyXYJZ9fyQzJsARx%2FtTZjUdyjciDV8%2Bem3AT5LHHJo6mXIbwOVHwEB8Uw&X-Amz-Signature=a59a06d48e681ec1ced284a161d025299068c79a9af35a3b86c05db72412a1ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDWMITQQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxNDEG3LtvkS4fBqm1YBA7OgTUCpuuVzaiD14SfiLp3AiA4ylEBzsy1nBHArDcxpOwSdRqLewPp0fl%2BK8tdI%2F26WiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2FYIsO6GQ9c9BjjbKtwDjvgWORIdx%2FOQHPLGP0rP467DtwuND0GvGJBkxTJ9kcF3ebJxufMIHmt8CJ2dnYMJnoEJjq9p%2FoyMDSkgMFpTNXQ2hpL3OS%2FiIxe3XXYOpz46HHz5aONSlOcxq3z80mnKQvEsMssgSm%2Bu5zzs5SRI7H4PrhzxTAeNAkZvFFGJXPyrow9OebKS8Q7dWDZQV%2BSjZH%2FYUN2BUKwfjvyujmFbPBZV1mPkJlKzk%2BbQ0b%2BrTJyuce%2Fgq19YSg5s1Lv%2BwwDOTL7612sZNaRVYcFwrIus5h7nVBdoKmuFToX2F2RiIDAu880jIMFTh94%2FGC03KmbEyPivPRiVHVcHsCka2KCgIZUC2JsYJL0dbCJHUsHGKnBnkuSW4%2F%2BNaklDwFrHaCicX2HfJoZM53lJvox5X92FWjOw0JOHX838cnBDc4s2Oy3bPu%2BZDEfG4IJ5e%2F5weFb8bNb5E0nfzeunf4cdOIX%2BK4Zsw6QVYLAEf70kAxirybEVimp5UxSic9e%2F0Dfg80nXLmUSlrqW96DUm4V1urQ8shwYLWgjVS47gTQtZ6DL6x%2BiWBYRQCca0gV74IN4fgbQ7QKc95%2BMn%2Bf12xhLXm%2BS7%2BFuZQ3I2sda2zG3V5vvTnVYwnDA%2BNDNrYsEzf0wu7TcyQY6pgEgt4vuvP%2BvV00PqoEAJj48TKaTNYDlokPk1k%2BmlelEK5YJpC5R8sYkZrgagjI13UnSoW6Px8UD5LvUq6bioTXBN0nufnqHlqMLhO3g64sOzWB%2BrbC%2BHYdy9RNTQyTrBh%2Bxd6R9r8GhFpkZMsu9hYe%2FzGltRIFASnjyfL6QyXYJZ9fyQzJsARx%2FtTZjUdyjciDV8%2Bem3AT5LHHJo6mXIbwOVHwEB8Uw&X-Amz-Signature=ef8662201e7adaf093cb01109a59db7c02feac9a41e6f976fc4bb40209f0a43a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

