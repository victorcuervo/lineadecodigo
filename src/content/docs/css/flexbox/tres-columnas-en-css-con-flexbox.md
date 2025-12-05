---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652DMHZZP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtKNpkrOJmGKxFAL8y5IRe6HDSzMFjY8bIEeK6yH%2FMTAiA8JBqAnV3RpjJS%2FJT8Na%2BMTDXNUMy%2BriKyZVc1dUAmHir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMuczPc7Jtq3wrF8stKtwDDwX05iFovjmL9gWZaLz2hi1VWpGiRlbUMepQlodR11abAX3QQJ8ggmKTE41mY%2BZTrtPpSpxINW0594I0zWuazBBSx5fyheSzmeJ5HYK9or%2B%2BpW2e8M2toTHVWFrfyA1YD0tRopFxpItnCay36r7raCRPUUtlJD2kTk6FwkHKuso8NB1mU7l%2BmmqYiEEc5E1LuOMqX4eFQocLYPFIoo4g5DkQl3Jxo3Y%2FzzLUrYRysIPB2mpmL6Jhtgv7MhrkHED0EAd3RsIq8kI401SHGuPwK7bdN03TzHdI6y461zyumlVCStXPu3N8NRhnugqdvWibvRSerynspm%2ByVpj8d2D1s48oBJIXzi06ZUyEYvux1u5H7OkuIJ1SkVY9HJJMVPUaqipz%2FiQFDWkPU8B4UhcJswvJq6zDplmntir%2FxAxu5rLXTBSujGlTOoEYAJDh3NFxpXP1lyDtSMr0VrZWGdSwzWwc8UEXOUrM6vTGsa59hKQNUOB96HKk5doMahuXLwFLISt2GsoHTRgEwcbTxmC01sn%2Br%2BnfT%2F%2BWjpOGisekoqBHX21S5ZEnq3Ko2d11tpTxTWtzCwEXcPm5MzoxLx7oPU6OKu6zi%2BNmeyJDJRmDwPz%2FF6iftayMmOKAuXcwsozIyQY6pgEHenu2YT97NGDj1l9SsBpCwiQG21G60tBUPjE%2FLuyaCFdYZ5MM1w31BaSyNWQipP%2BqHqTMdDsaO%2F3y4T1CYy9kV5zI6ZYv%2Bb2WhXWHIGyoiXeRC5gyFqnivUL%2F0uM5tN0mO8FjnE60kkFN9d3Ns7CJPyRXtfEIta7p4JnAj1zhuOK7N0OYkrcTOsGTT%2FZB%2F6QgDM%2FGl%2FTG3AOOIRXei2CYAVS5BRhz&X-Amz-Signature=96f325238b9a4e296637c742697c63ae5c53c5732ab2c89f35a5bdd897ec5888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652DMHZZP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtKNpkrOJmGKxFAL8y5IRe6HDSzMFjY8bIEeK6yH%2FMTAiA8JBqAnV3RpjJS%2FJT8Na%2BMTDXNUMy%2BriKyZVc1dUAmHir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMuczPc7Jtq3wrF8stKtwDDwX05iFovjmL9gWZaLz2hi1VWpGiRlbUMepQlodR11abAX3QQJ8ggmKTE41mY%2BZTrtPpSpxINW0594I0zWuazBBSx5fyheSzmeJ5HYK9or%2B%2BpW2e8M2toTHVWFrfyA1YD0tRopFxpItnCay36r7raCRPUUtlJD2kTk6FwkHKuso8NB1mU7l%2BmmqYiEEc5E1LuOMqX4eFQocLYPFIoo4g5DkQl3Jxo3Y%2FzzLUrYRysIPB2mpmL6Jhtgv7MhrkHED0EAd3RsIq8kI401SHGuPwK7bdN03TzHdI6y461zyumlVCStXPu3N8NRhnugqdvWibvRSerynspm%2ByVpj8d2D1s48oBJIXzi06ZUyEYvux1u5H7OkuIJ1SkVY9HJJMVPUaqipz%2FiQFDWkPU8B4UhcJswvJq6zDplmntir%2FxAxu5rLXTBSujGlTOoEYAJDh3NFxpXP1lyDtSMr0VrZWGdSwzWwc8UEXOUrM6vTGsa59hKQNUOB96HKk5doMahuXLwFLISt2GsoHTRgEwcbTxmC01sn%2Br%2BnfT%2F%2BWjpOGisekoqBHX21S5ZEnq3Ko2d11tpTxTWtzCwEXcPm5MzoxLx7oPU6OKu6zi%2BNmeyJDJRmDwPz%2FF6iftayMmOKAuXcwsozIyQY6pgEHenu2YT97NGDj1l9SsBpCwiQG21G60tBUPjE%2FLuyaCFdYZ5MM1w31BaSyNWQipP%2BqHqTMdDsaO%2F3y4T1CYy9kV5zI6ZYv%2Bb2WhXWHIGyoiXeRC5gyFqnivUL%2F0uM5tN0mO8FjnE60kkFN9d3Ns7CJPyRXtfEIta7p4JnAj1zhuOK7N0OYkrcTOsGTT%2FZB%2F6QgDM%2FGl%2FTG3AOOIRXei2CYAVS5BRhz&X-Amz-Signature=cda7cc9b35be3b3e1eb0a5331525b13710d696c088c55ac7a34a2fac377dd751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

