---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBVWLWFW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJC3stwge8udkTi7JNwD58qjF4BzISYNrxIwSeApNEYAIgKBl2bbIlXblnNualnI%2FNPCi6N7oWpf3%2FTrbjmHfvheoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhs3H8Tp%2BQGkKkH%2ByrcA7vQcIzzWLkLvcYkkj32xafQIgsL9h7e7xGEohrKP%2B0wArO%2ByrmYxsQIWd04I4n2VxdQppJWHQjLpr8uxC6OcYSvkkj8G1r1F7Wcwz5V9rqmcttWlJ0gD1%2FsbG9E6fKKh9huSH1zuY8K2UKWPBth0n4oy44G62c7W9CCvpOKDkjOXmAfsxBtpuc7P1KjEk6F1MWQ76JQcMICqNm37hU%2BHQbS5A0Vr3gkzeBHzte%2F24TAc%2FccC8gdVAhsHCqbkd9k6czn3smnnm%2Bxr3PWJRN1etjwMpv5Q0fFS3iyjtt3lAnb9NsQgtGan8DS7kdktqcE9FUm0lcQmmxACF6BDOjFOUDaysPEmnQcev41O1JVGRmILqFySBOFuszwdKIaFK%2BpmCfYKofybc6%2FsOsBzq%2Fhf6e8plMS8RgYvqc4rvCJldPJlzkLeyWqH0kzNiYv9NLH8jPOdoQyC2HANr6kjRskEF2%2FCfCirps0KJVVh5AtOdbUcZn%2B0vDkJhzwiHKUtWGvIU3Dc8XeMZ%2FfqCfbOwtNQ7nyR0kS08Q%2BEoV%2BvTFXXI%2FRuWzvxxGMZlhWLDCa2TsCHWvvmY2OqwM8JT1qcgjucmjYupwpiInntI362KCS%2F8Tch7AYLp2IaZKq3lprMKCQ28kGOqUBkAK2unFkAgBvjXExvg4PygW66rDfd1T58wtJuh9L%2F49g5h2NOx497TkMa4A1L%2Bhaz9FHdM5B0soL2rxlatEXblRyykQoKckjjfuKNbyXzTw6RpzV%2BJh9d9nuuluW2GcDQio9eSkSot%2FCLrIxh3Zln4xOk7%2B5n%2Fq1SH4SJa3d2LlLor5cCGjhsQgTnqmm0V4sCOGN1NkAXG5HQ8SVfMiCqTrd4QVg&X-Amz-Signature=c8754613298974276d071612abd36ccb69063586a6e14c38bb45be7fa4484856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBVWLWFW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJC3stwge8udkTi7JNwD58qjF4BzISYNrxIwSeApNEYAIgKBl2bbIlXblnNualnI%2FNPCi6N7oWpf3%2FTrbjmHfvheoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhs3H8Tp%2BQGkKkH%2ByrcA7vQcIzzWLkLvcYkkj32xafQIgsL9h7e7xGEohrKP%2B0wArO%2ByrmYxsQIWd04I4n2VxdQppJWHQjLpr8uxC6OcYSvkkj8G1r1F7Wcwz5V9rqmcttWlJ0gD1%2FsbG9E6fKKh9huSH1zuY8K2UKWPBth0n4oy44G62c7W9CCvpOKDkjOXmAfsxBtpuc7P1KjEk6F1MWQ76JQcMICqNm37hU%2BHQbS5A0Vr3gkzeBHzte%2F24TAc%2FccC8gdVAhsHCqbkd9k6czn3smnnm%2Bxr3PWJRN1etjwMpv5Q0fFS3iyjtt3lAnb9NsQgtGan8DS7kdktqcE9FUm0lcQmmxACF6BDOjFOUDaysPEmnQcev41O1JVGRmILqFySBOFuszwdKIaFK%2BpmCfYKofybc6%2FsOsBzq%2Fhf6e8plMS8RgYvqc4rvCJldPJlzkLeyWqH0kzNiYv9NLH8jPOdoQyC2HANr6kjRskEF2%2FCfCirps0KJVVh5AtOdbUcZn%2B0vDkJhzwiHKUtWGvIU3Dc8XeMZ%2FfqCfbOwtNQ7nyR0kS08Q%2BEoV%2BvTFXXI%2FRuWzvxxGMZlhWLDCa2TsCHWvvmY2OqwM8JT1qcgjucmjYupwpiInntI362KCS%2F8Tch7AYLp2IaZKq3lprMKCQ28kGOqUBkAK2unFkAgBvjXExvg4PygW66rDfd1T58wtJuh9L%2F49g5h2NOx497TkMa4A1L%2Bhaz9FHdM5B0soL2rxlatEXblRyykQoKckjjfuKNbyXzTw6RpzV%2BJh9d9nuuluW2GcDQio9eSkSot%2FCLrIxh3Zln4xOk7%2B5n%2Fq1SH4SJa3d2LlLor5cCGjhsQgTnqmm0V4sCOGN1NkAXG5HQ8SVfMiCqTrd4QVg&X-Amz-Signature=0969137af7baab1310cf0ff5ecac8c1a3fd4fef5ed64f6c20a26658a8b3915aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

