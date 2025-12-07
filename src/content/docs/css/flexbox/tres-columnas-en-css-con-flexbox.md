---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W7HJTNM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPB168XqqxzVX8J3LIKzxztGhDoAB0FsbbZxGUFJzbZAiBKSx9P51qWdqxbO7AC8eUjK2cILAdX9sp%2BENXqZ15DCSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZF44tACCkzMJ60u%2BKtwDp%2BwRd653D7gCuKNtc5u8KDAjXdoEU%2BehT%2F5jCmbQPutFB5VaqLE3B8Kl1KX%2BJtS1QgZ7U6gV%2FVhU5y521dyBJHhywISf0usJ04nw5hF2DAjn4D6qT8MrF3qfPvnXhARRjb3gyxmOog78fDcaemLAq%2BwyJmib72wJ2%2FugJ%2FGt%2BJ%2FMMJmUN9MT1P%2BKBpuadFw%2F7kMQ3DamI4z12qeB%2FEmlUpYUk9DPgVwEgARAlgw049nIrVSAQZXvREk%2BzNiEDKKtES0BNRodbyv6SJkrmaCHZ91s4p6oy4PZzq7FQj6AUoVcJuzlD8TqAbVLsK2tzzNUHjOj12%2FrQ86bwwiQzebi2YfNWoZyJnj4ip6ra7HH%2FdABBriMWEKUki9e7nulnLpj7cj9FAdicRLTZJqxpiFAsggF3yR%2F9vBy6zuYBfP62U%2F8SddIluulygIOiVbMsAZfn7miF5kIwV7%2FD1ViSFzoHHj%2BhENEyLDpJk6lVX9a6C6mH3WAgItcU2qa1fuRBSL%2FHG%2FypWqlaeODXepS6vRuEMc%2B7bEvQdx0y6oa%2FG2DueqQtZ5i7YLh1cLMyajIN21rUkvQcxoNnsHd0DToxst9r%2FM5xxW%2FrrIRgYtdG3LHunsopmSzkR8obh8bSpkw1JnVyQY6pgHciAb%2BwXmUaub7qJuaU7Gez7fzJJcOJCqOG1nbEurQvaBCLDCkEJsyhO0kgxjgtv8Vdmooylmkg49ZVCEkFoALWictRTz14WtFm0PGOLfUlH6xRNZiLl6nDcujwSTGWyQb%2B7cLqLXyEqagSlCmHpMWK4pGiW7jmcCI30ST2pL5puIaj6mkh5u9gMqNemm9BmehbIfQzWYLhBOfrQ2nCDfuMo9O%2FEDE&X-Amz-Signature=b21b2fe26cd1dbe62933e2c96c3e0fdf1e715533bbebd6a1806ce69622f76e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W7HJTNM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPB168XqqxzVX8J3LIKzxztGhDoAB0FsbbZxGUFJzbZAiBKSx9P51qWdqxbO7AC8eUjK2cILAdX9sp%2BENXqZ15DCSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZF44tACCkzMJ60u%2BKtwDp%2BwRd653D7gCuKNtc5u8KDAjXdoEU%2BehT%2F5jCmbQPutFB5VaqLE3B8Kl1KX%2BJtS1QgZ7U6gV%2FVhU5y521dyBJHhywISf0usJ04nw5hF2DAjn4D6qT8MrF3qfPvnXhARRjb3gyxmOog78fDcaemLAq%2BwyJmib72wJ2%2FugJ%2FGt%2BJ%2FMMJmUN9MT1P%2BKBpuadFw%2F7kMQ3DamI4z12qeB%2FEmlUpYUk9DPgVwEgARAlgw049nIrVSAQZXvREk%2BzNiEDKKtES0BNRodbyv6SJkrmaCHZ91s4p6oy4PZzq7FQj6AUoVcJuzlD8TqAbVLsK2tzzNUHjOj12%2FrQ86bwwiQzebi2YfNWoZyJnj4ip6ra7HH%2FdABBriMWEKUki9e7nulnLpj7cj9FAdicRLTZJqxpiFAsggF3yR%2F9vBy6zuYBfP62U%2F8SddIluulygIOiVbMsAZfn7miF5kIwV7%2FD1ViSFzoHHj%2BhENEyLDpJk6lVX9a6C6mH3WAgItcU2qa1fuRBSL%2FHG%2FypWqlaeODXepS6vRuEMc%2B7bEvQdx0y6oa%2FG2DueqQtZ5i7YLh1cLMyajIN21rUkvQcxoNnsHd0DToxst9r%2FM5xxW%2FrrIRgYtdG3LHunsopmSzkR8obh8bSpkw1JnVyQY6pgHciAb%2BwXmUaub7qJuaU7Gez7fzJJcOJCqOG1nbEurQvaBCLDCkEJsyhO0kgxjgtv8Vdmooylmkg49ZVCEkFoALWictRTz14WtFm0PGOLfUlH6xRNZiLl6nDcujwSTGWyQb%2B7cLqLXyEqagSlCmHpMWK4pGiW7jmcCI30ST2pL5puIaj6mkh5u9gMqNemm9BmehbIfQzWYLhBOfrQ2nCDfuMo9O%2FEDE&X-Amz-Signature=eb98d631560b47cc51f11d086db8732b39be843406aa922560ae6aca6211f7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

