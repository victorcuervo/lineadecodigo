---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXWJQP7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGvL03KKmZQtUKzyP2pkXbYLieOBkCB%2Fa0OA9%2F1vUQ1kAiEAhuj73wypogeezGdJnZl%2B149VEHa8zdd%2FaWyM8LuJXHMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGcCtlPebn1kShH50SrcAzKS9Ny%2Fe8Zu2JfFQMmt0bQBUoLvvOJIQ%2FaU5R9bJQ4gtJSUUSCtOafOhHLGmU%2B7BUP7CcwITZujR3vLA6izv7fxtRSNut2UFM8hSYRs2VczrirN41VSps%2F6iJQmG5jt8E0vyPyeqFeWtfOUpyBoHwZKuJaaeKR5UGtk%2BIAE5%2Bv4oucXaH6I%2BHl%2FV4JmAjMv7MlGuBUh2eoN1etNN9gCbaiAUmtO7BLI0JcAZACDT%2FTBDNUUC1r4zyCcnleGIgBwtnhjzyGgKQGASa8SU2ifARX2Q3j0OwgSY22sGOIwC9OLMInth0nV668H8posxm%2FYOwQGgvuphpXP1W27EiU2rOtvnIf06FEatHnaN0H4wbyqns1gaw%2FOKn%2BzSJlg6Cdu3LCnZLuOEZwChluF3YDf5K6ytQcouQdPw8pi4T80eGcr6MfMYq6iE1VW3ymXArmCxlARjCh15bICcHCmjiBcZqEf783c1qRvLWu1AWyiFsKsUidyeTivsq%2B7pRa8rPXKdOZJy1UiO5SQclRoKxgcVFbpCOcNYkeqwnxahAgg3tE%2FjXllvwz2RA2thnNw7yxKNE3RXEhJvF84G9%2BKVAo7ME50pZT3Skr3oqZkVE9vYK9i%2FQhYmlOkWZOJAH4KMI%2BGxckGOqUBLw2tfZwKbFtUEbU4liBl4dqhOdvaWXk6fXMCrlWvZi8lzH54KF5pQf3T4QKrNO1scnHnXtSTMNpuM2gU6JxWTjpSu2W1Kr6U3QlFBGjIQawZwX6r1xvBC24kbcRoru2vsF80TJp4jgeneQwsUPJBjghVd8a9MHcg5NuJiVOp1r%2FhjEVtDAxzSDGTbUm8TG%2FNn4mjfJqSDSvdLJPOonOaEmYdzpaf&X-Amz-Signature=a89d463a33f3391f3da4340a9fdda54e4a12aaa5165e8e3e8769cec7a50d3a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXWJQP7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGvL03KKmZQtUKzyP2pkXbYLieOBkCB%2Fa0OA9%2F1vUQ1kAiEAhuj73wypogeezGdJnZl%2B149VEHa8zdd%2FaWyM8LuJXHMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGcCtlPebn1kShH50SrcAzKS9Ny%2Fe8Zu2JfFQMmt0bQBUoLvvOJIQ%2FaU5R9bJQ4gtJSUUSCtOafOhHLGmU%2B7BUP7CcwITZujR3vLA6izv7fxtRSNut2UFM8hSYRs2VczrirN41VSps%2F6iJQmG5jt8E0vyPyeqFeWtfOUpyBoHwZKuJaaeKR5UGtk%2BIAE5%2Bv4oucXaH6I%2BHl%2FV4JmAjMv7MlGuBUh2eoN1etNN9gCbaiAUmtO7BLI0JcAZACDT%2FTBDNUUC1r4zyCcnleGIgBwtnhjzyGgKQGASa8SU2ifARX2Q3j0OwgSY22sGOIwC9OLMInth0nV668H8posxm%2FYOwQGgvuphpXP1W27EiU2rOtvnIf06FEatHnaN0H4wbyqns1gaw%2FOKn%2BzSJlg6Cdu3LCnZLuOEZwChluF3YDf5K6ytQcouQdPw8pi4T80eGcr6MfMYq6iE1VW3ymXArmCxlARjCh15bICcHCmjiBcZqEf783c1qRvLWu1AWyiFsKsUidyeTivsq%2B7pRa8rPXKdOZJy1UiO5SQclRoKxgcVFbpCOcNYkeqwnxahAgg3tE%2FjXllvwz2RA2thnNw7yxKNE3RXEhJvF84G9%2BKVAo7ME50pZT3Skr3oqZkVE9vYK9i%2FQhYmlOkWZOJAH4KMI%2BGxckGOqUBLw2tfZwKbFtUEbU4liBl4dqhOdvaWXk6fXMCrlWvZi8lzH54KF5pQf3T4QKrNO1scnHnXtSTMNpuM2gU6JxWTjpSu2W1Kr6U3QlFBGjIQawZwX6r1xvBC24kbcRoru2vsF80TJp4jgeneQwsUPJBjghVd8a9MHcg5NuJiVOp1r%2FhjEVtDAxzSDGTbUm8TG%2FNn4mjfJqSDSvdLJPOonOaEmYdzpaf&X-Amz-Signature=d4559b00864d4b6fc7d174801b0a7ff44cc73e2ed815e46627b05a34fe063a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

