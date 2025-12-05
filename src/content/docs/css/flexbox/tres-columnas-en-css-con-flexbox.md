---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDCXB4P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM882310d2KRX0suW5gYnoIlWt0rIzUAHkKibyWI2opAiEAwkhcIS1Nd9if5B%2Fop58o6g6QmcBM6K9GJAw2ieod99sq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAWWHoa2JUZ6tCQGXCrcA8PFvq7YvxFlI%2FqutJu8qtdyVZ5DS9nlzZEQL86hrzTyKziaEVL4fFndHY8ymjqCL0LNLC8EXt4ySZHn5fiIDKCXlDHhZhZtEXV40ySjgtvjIrR1MDlAx68St648E2MT0Q2%2BTg%2B%2FH6IAZhaMQEA4Abej7tZEkfyJXK56eE8Z3vcUpyL2YjCWnWjd26jxOxDmI0a%2FrxNwmSDE6RyIpe%2FvidbTLAzTEDF45dYQmT4q8Euv2AanPvze4qathnbm7M8dsB9s8iEl3CIP4r6gVc362a%2B%2Fj44ic8gJLIIlQnbWZOYtF%2BbEGUFBQTZ%2FLn9Cr%2FW7Mdtx8XgraTA5XOtICdEmYFNmV4ZeUIG%2B9of%2BwzLcBV7eZGhbi1TGM%2Bu4BS89MK9OgWwg2eJDOrLN7lHf3jsxYB3nw%2FGJpXx0nm4Lp5VVHh1sambBEkUJu2iH6Lg14aF3aQ9QAhV8UPxi7IBPKADWbftcHcIUzt5ny66gFoktWsQJ1WatwFa9X8rGQWQG9PSM%2BmDEuv49GdZ9%2B3PuWjplvjgYOminzRCmf33oSP%2FyvWd2NlUC5oZmy%2BH%2BkfIRup8CovZcs8U%2FIG%2FIt72Ly6KTQvTl4csqmnuwNZdpapkWqNzgKPEEzLIW%2BKcC544HMKLRyskGOqUBzYdglkLBR8aIUd7k%2F%2F6h5klVYVo11mF7Kf3I1innuN6m%2B4j4wvaB%2Bu%2BUj7TCz33Zj3wT4V5zVOFSpdf01vrgKKiU6S%2F2icZSEj8JMUyPk1POpuPofb4ttifEX5urOPAxndQy98daAIQQfDo%2BF99iT52PLEfIsNpCkcgEcp0X2H%2BB0vhKup%2Fx7d7iXp%2FiVPfja4txsKBpnNKc3MQfLROD5CcG5HuB&X-Amz-Signature=7b6ea52370485dafb6872efa0554bdd3592e7ed0db8adda6b8a0ecaa6ed21523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDCXB4P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM882310d2KRX0suW5gYnoIlWt0rIzUAHkKibyWI2opAiEAwkhcIS1Nd9if5B%2Fop58o6g6QmcBM6K9GJAw2ieod99sq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAWWHoa2JUZ6tCQGXCrcA8PFvq7YvxFlI%2FqutJu8qtdyVZ5DS9nlzZEQL86hrzTyKziaEVL4fFndHY8ymjqCL0LNLC8EXt4ySZHn5fiIDKCXlDHhZhZtEXV40ySjgtvjIrR1MDlAx68St648E2MT0Q2%2BTg%2B%2FH6IAZhaMQEA4Abej7tZEkfyJXK56eE8Z3vcUpyL2YjCWnWjd26jxOxDmI0a%2FrxNwmSDE6RyIpe%2FvidbTLAzTEDF45dYQmT4q8Euv2AanPvze4qathnbm7M8dsB9s8iEl3CIP4r6gVc362a%2B%2Fj44ic8gJLIIlQnbWZOYtF%2BbEGUFBQTZ%2FLn9Cr%2FW7Mdtx8XgraTA5XOtICdEmYFNmV4ZeUIG%2B9of%2BwzLcBV7eZGhbi1TGM%2Bu4BS89MK9OgWwg2eJDOrLN7lHf3jsxYB3nw%2FGJpXx0nm4Lp5VVHh1sambBEkUJu2iH6Lg14aF3aQ9QAhV8UPxi7IBPKADWbftcHcIUzt5ny66gFoktWsQJ1WatwFa9X8rGQWQG9PSM%2BmDEuv49GdZ9%2B3PuWjplvjgYOminzRCmf33oSP%2FyvWd2NlUC5oZmy%2BH%2BkfIRup8CovZcs8U%2FIG%2FIt72Ly6KTQvTl4csqmnuwNZdpapkWqNzgKPEEzLIW%2BKcC544HMKLRyskGOqUBzYdglkLBR8aIUd7k%2F%2F6h5klVYVo11mF7Kf3I1innuN6m%2B4j4wvaB%2Bu%2BUj7TCz33Zj3wT4V5zVOFSpdf01vrgKKiU6S%2F2icZSEj8JMUyPk1POpuPofb4ttifEX5urOPAxndQy98daAIQQfDo%2BF99iT52PLEfIsNpCkcgEcp0X2H%2BB0vhKup%2Fx7d7iXp%2FiVPfja4txsKBpnNKc3MQfLROD5CcG5HuB&X-Amz-Signature=56948cbbf014199182681b633b07653dade75c3b17fcc7eceec85707113cd9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

