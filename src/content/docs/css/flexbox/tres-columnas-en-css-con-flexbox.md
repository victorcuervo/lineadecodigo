---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SENFCX2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO9M%2BcN6OE6o4F4SP2DaZ%2BsdId8wKkUQ1ItvJsuZQN2AIhAIGm9PlAFq6phZFZJARIPn1GqjJZqmwB5llZeMri2F7PKv8DCFUQABoMNjM3NDIzMTgzODA1IgydgwJT6%2FdZWtmcDYgq3AO6ifDQqGFnotO5FytW612ZzRm5JQdyRjDEalgS8SAfDv%2FgJORKbHoyswc2U7Jz84z3x2coZFOMbAPzR62pAi2gQWJKP50PINCq5TwtgkH63OFJbwNEUVfQ9KrK%2BtwxJweXDcMvbkMJ41Bv3GBmkJzPv179ejWQ7liAgi8DkFpZJ%2FBNRIjQDpbdcXanYbpJzdIHeO1BKx6P62Pnh%2BTz5EEP%2BMIfp%2FInO5MIsRXhyRuyULwz7fKEuTIG1UUW7VqylMrLTD1lfZHm1sp5U3VgpsmDMI4HXGIoOxfk%2Fg%2BVnwb2SKoeta9QwLzn4z%2FDTUusU3s0BIs26%2FFFAF8eYP54ucMMs0zlwvcSAU3KNhAF5HHp7bvjC3t%2Be58jFYFcjeyyCC9lkA%2FYqPnZTtK%2FG0WmCVvdKZJ%2FPEPGT7Q9ewCLWou6BF0kQy4C4THtvVNHZ3TVNOHpENypMRsB6nXd9B7F9%2F6DjuDOZDgLIJ%2FSLdKU9FfjZ55CuYAv%2Fga2WoHrva9ct94f9%2Bs4OxI1OF3xVnQRa0fx9Bw%2B5hisLCorO%2F3Cqp7%2B%2BZJbrtQOsMi8YjGqGaLXU3%2FTI%2Bn%2FQ6FDtuMlvOv3g%2F2K%2Bh5Dz%2FIcrs782yuCjBhDIL6SyEDGxMnC3zj8VTDYrcnJBjqkAZgpmVYyw8BOKPVIOhw22rYx7d6mN4kmPSaX%2FSr2HPF8rO0uzkRrfh6%2B9YhWjZqRrE518gFcR6gR0qj0ywXzTvwKuI%2FkGFiXuw53ja4xO2GDbaKReqlPmGxrch4Z5Qc8WnxApJoIchzcdDoYT0osDV2pn2S8d9clZt38db6Xc9ibym5jiCJEv0RhSyaoo0iptC8EM7mKpcjk1qdwmj0iKgIAaN8I&X-Amz-Signature=2200779e7c1fdb004411e8fcd90f228067980d28f4d22089743a2667f3c691da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SENFCX2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO9M%2BcN6OE6o4F4SP2DaZ%2BsdId8wKkUQ1ItvJsuZQN2AIhAIGm9PlAFq6phZFZJARIPn1GqjJZqmwB5llZeMri2F7PKv8DCFUQABoMNjM3NDIzMTgzODA1IgydgwJT6%2FdZWtmcDYgq3AO6ifDQqGFnotO5FytW612ZzRm5JQdyRjDEalgS8SAfDv%2FgJORKbHoyswc2U7Jz84z3x2coZFOMbAPzR62pAi2gQWJKP50PINCq5TwtgkH63OFJbwNEUVfQ9KrK%2BtwxJweXDcMvbkMJ41Bv3GBmkJzPv179ejWQ7liAgi8DkFpZJ%2FBNRIjQDpbdcXanYbpJzdIHeO1BKx6P62Pnh%2BTz5EEP%2BMIfp%2FInO5MIsRXhyRuyULwz7fKEuTIG1UUW7VqylMrLTD1lfZHm1sp5U3VgpsmDMI4HXGIoOxfk%2Fg%2BVnwb2SKoeta9QwLzn4z%2FDTUusU3s0BIs26%2FFFAF8eYP54ucMMs0zlwvcSAU3KNhAF5HHp7bvjC3t%2Be58jFYFcjeyyCC9lkA%2FYqPnZTtK%2FG0WmCVvdKZJ%2FPEPGT7Q9ewCLWou6BF0kQy4C4THtvVNHZ3TVNOHpENypMRsB6nXd9B7F9%2F6DjuDOZDgLIJ%2FSLdKU9FfjZ55CuYAv%2Fga2WoHrva9ct94f9%2Bs4OxI1OF3xVnQRa0fx9Bw%2B5hisLCorO%2F3Cqp7%2B%2BZJbrtQOsMi8YjGqGaLXU3%2FTI%2Bn%2FQ6FDtuMlvOv3g%2F2K%2Bh5Dz%2FIcrs782yuCjBhDIL6SyEDGxMnC3zj8VTDYrcnJBjqkAZgpmVYyw8BOKPVIOhw22rYx7d6mN4kmPSaX%2FSr2HPF8rO0uzkRrfh6%2B9YhWjZqRrE518gFcR6gR0qj0ywXzTvwKuI%2FkGFiXuw53ja4xO2GDbaKReqlPmGxrch4Z5Qc8WnxApJoIchzcdDoYT0osDV2pn2S8d9clZt38db6Xc9ibym5jiCJEv0RhSyaoo0iptC8EM7mKpcjk1qdwmj0iKgIAaN8I&X-Amz-Signature=646fa1ddf8708caef9a21ce330917e312088fbf70732cdd5e4e9f0c5b29342e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

