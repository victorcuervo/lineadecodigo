---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MIUF3QN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIuq91xm%2BeRavEAKxg8S7B1eK179x29xwl52ghZKfM5AiEAmhjSEm7vOSjA92fGZPeUWMUu6jBJ%2BempJY62O6w9hZ0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBnh71Yvtc4SHcrzSrcA5nLlh1QPkuaMYEriiVZYe9Zlw1P1WHZghxUi7fu%2FGV4mKC0paudm7v7QAtTQGiuEJOzePyOk7YasMT8QsDVWvbY4OzeVyx4FCV%2FqSJaxLXdhB11IXwha8VLEuC7VttEFerUHh%2B1pZ02lJ9OYrLMLtMKOHiCnNwXOkjwQHnmRK2B%2FMiBShYbE7mAqiz86%2FohmOoxSazmySJQQA8AQ1GKiiykdcVqjD2cquNAqVmieeHZ%2BRSMjel9%2FtALqeJU3uohDmpI56CXycxFEKQxOEgxqG0%2B8hLGwoFmcEo%2BS8AQ9DfCGPmpt7LzVBf55ynZY9fT03sULkTE2wAooiIo%2FCLVau5bQC46xBgqXNpS9JGh86BJkksSD8M90UQv1B02dSTbYPvGpe6vc%2BXdSncHTxksBPsf2OQ%2F3l83aV0hPcwPMedsaUeI%2FDhTeOj9Oo2mlAYzZWYGQEItwPwSg9K1IXfnvbAnrP6NdAIrR2b8FFOlPutjKLq7RABtRCeb967N6m7wMVdd5yVjFByoqllG00uMQ0YCQh4kmgVrw%2FwsSM2O36jkL%2FlGUloVnXEyGlSlqGMxyaIQ6gY3dFeXk2R5JHYY5hiFdjzqyaw7AOxc3mUb5sLLWbGAJz9FZpftGr9GMMKa1ckGOqUBDdHpKS6orRbDec9Mc3xkbcranP4LC1FddIoeOBzWkchrqIq34MT635S0ty2VvhgoWBEgzbRT5B50RTNr8nbev%2F4OR245NL2A3sX%2Bw%2Bc9%2Bf%2FgY3kZu%2FzmQ4YpqtZ11kk7b0HSqls%2BerjpN%2B8pTkS6XJkiWbBr4bbRdT%2Bqs7L920eRX6zyCUnTE6KecK%2BY5%2BrrNnxzIH3FX9lKQGL8t%2BcCCUMlvNMP&X-Amz-Signature=2f04e79b9ecbde4a72db59b16df52fdacecf0e3c9b86ec0ec088df7f1d8a4cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MIUF3QN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIuq91xm%2BeRavEAKxg8S7B1eK179x29xwl52ghZKfM5AiEAmhjSEm7vOSjA92fGZPeUWMUu6jBJ%2BempJY62O6w9hZ0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBnh71Yvtc4SHcrzSrcA5nLlh1QPkuaMYEriiVZYe9Zlw1P1WHZghxUi7fu%2FGV4mKC0paudm7v7QAtTQGiuEJOzePyOk7YasMT8QsDVWvbY4OzeVyx4FCV%2FqSJaxLXdhB11IXwha8VLEuC7VttEFerUHh%2B1pZ02lJ9OYrLMLtMKOHiCnNwXOkjwQHnmRK2B%2FMiBShYbE7mAqiz86%2FohmOoxSazmySJQQA8AQ1GKiiykdcVqjD2cquNAqVmieeHZ%2BRSMjel9%2FtALqeJU3uohDmpI56CXycxFEKQxOEgxqG0%2B8hLGwoFmcEo%2BS8AQ9DfCGPmpt7LzVBf55ynZY9fT03sULkTE2wAooiIo%2FCLVau5bQC46xBgqXNpS9JGh86BJkksSD8M90UQv1B02dSTbYPvGpe6vc%2BXdSncHTxksBPsf2OQ%2F3l83aV0hPcwPMedsaUeI%2FDhTeOj9Oo2mlAYzZWYGQEItwPwSg9K1IXfnvbAnrP6NdAIrR2b8FFOlPutjKLq7RABtRCeb967N6m7wMVdd5yVjFByoqllG00uMQ0YCQh4kmgVrw%2FwsSM2O36jkL%2FlGUloVnXEyGlSlqGMxyaIQ6gY3dFeXk2R5JHYY5hiFdjzqyaw7AOxc3mUb5sLLWbGAJz9FZpftGr9GMMKa1ckGOqUBDdHpKS6orRbDec9Mc3xkbcranP4LC1FddIoeOBzWkchrqIq34MT635S0ty2VvhgoWBEgzbRT5B50RTNr8nbev%2F4OR245NL2A3sX%2Bw%2Bc9%2Bf%2FgY3kZu%2FzmQ4YpqtZ11kk7b0HSqls%2BerjpN%2B8pTkS6XJkiWbBr4bbRdT%2Bqs7L920eRX6zyCUnTE6KecK%2BY5%2BrrNnxzIH3FX9lKQGL8t%2BcCCUMlvNMP&X-Amz-Signature=c6fcd8cc12f65e558e9f1a1a15dfe0bad13f1bdfb37dddcf377ccfe6d2b33a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

