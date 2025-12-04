---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEVXZ4DQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIH52%2FHLR6aSJouRSJ%2FSOAW%2F1r18T51ao1nmsSig4KRJnAiAyWHYlmPZF1AhyXA5MOW1KRnUVpHHgiLzgPn11yLoNNSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeolReFHIcoB2NC2%2FKtwDrJ3XkTaqtK9YzG4fDLn8Fl7uXi4dR%2B5STjSF%2F4CymYiMQHvww%2F4i5lLsUDffINFH5ntrLr9eWrvmyrN%2FKS6PKQVvFVu%2BiFjLsWLnF25tZ%2Fk59m0vGelFpKg7DFKrEKseIi0BTLvVSJNH70oeaanv1JE9uKinXf9xQdzIdclQk%2FyfsEnUjQ1WgqQ5jpyMtPR7A0tFQJy4RS%2FesH1n6vidt2yNY%2FS2vrK2hIqse%2ByYT6CZKHCgTy%2BBQwa0ZJyyAjnG%2FyZ3tQOf%2B65KuIBMdvmLjdYe2FOqimGE7Z5%2FfUXhFvpJT5LF3nZ%2BJQfrUuVJc%2BRbuSIeBqhuGZGFluyTOAhcqKLiCbpHJIlb%2BYd0HEULQrx5i4RhUpPbRDQSjsvFANVQWu35gA4EWwmlJuWoQStCDGjoMhEaP%2Bo63%2BCdU9XAhkhhAXpoFH16J5ba35rvu%2B%2FSm0luq0Txu0ZOs9UqUMIjGQ49fv7fcz7S0HjTro4Apn4OMrOH091cLMtp2nqQg60skycM6upiBql5IDfNbS05I0WTc6eY9c5kT3zazf6OwIUl10yDa1w4LgyV9nocXWAaxnWIS8JynoDBSvo0N3L%2BZFdbDSGzJ23ZyiyEmsStHujgJpd1xSuXtfns8nswxvPDyQY6pgHUC9smxB6I39Ec3HRv%2BWSnED8JrJsjLEUyEbDjPNgjL%2FMdC%2BxT3r4oyJy2RvOqhdMKQ9APDBXyUcXJSTXdqNYp83iIt5g%2Fw6HSFjtvSGyaj22TUZu5RJJvejAL9So%2FbP67som18zTcL5iWDGst%2BKsyj8aPSYyhHD7z1V%2F07JcO4D5r0n%2B7poTK5okt5WznFlFxhUt7Aji5Lom%2FO5JITC5c%2F4bofIDq&X-Amz-Signature=d669a15a30bd3b30ac2e68f6ef416acfa83f00685633f5f431b515a8833b8cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEVXZ4DQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIH52%2FHLR6aSJouRSJ%2FSOAW%2F1r18T51ao1nmsSig4KRJnAiAyWHYlmPZF1AhyXA5MOW1KRnUVpHHgiLzgPn11yLoNNSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeolReFHIcoB2NC2%2FKtwDrJ3XkTaqtK9YzG4fDLn8Fl7uXi4dR%2B5STjSF%2F4CymYiMQHvww%2F4i5lLsUDffINFH5ntrLr9eWrvmyrN%2FKS6PKQVvFVu%2BiFjLsWLnF25tZ%2Fk59m0vGelFpKg7DFKrEKseIi0BTLvVSJNH70oeaanv1JE9uKinXf9xQdzIdclQk%2FyfsEnUjQ1WgqQ5jpyMtPR7A0tFQJy4RS%2FesH1n6vidt2yNY%2FS2vrK2hIqse%2ByYT6CZKHCgTy%2BBQwa0ZJyyAjnG%2FyZ3tQOf%2B65KuIBMdvmLjdYe2FOqimGE7Z5%2FfUXhFvpJT5LF3nZ%2BJQfrUuVJc%2BRbuSIeBqhuGZGFluyTOAhcqKLiCbpHJIlb%2BYd0HEULQrx5i4RhUpPbRDQSjsvFANVQWu35gA4EWwmlJuWoQStCDGjoMhEaP%2Bo63%2BCdU9XAhkhhAXpoFH16J5ba35rvu%2B%2FSm0luq0Txu0ZOs9UqUMIjGQ49fv7fcz7S0HjTro4Apn4OMrOH091cLMtp2nqQg60skycM6upiBql5IDfNbS05I0WTc6eY9c5kT3zazf6OwIUl10yDa1w4LgyV9nocXWAaxnWIS8JynoDBSvo0N3L%2BZFdbDSGzJ23ZyiyEmsStHujgJpd1xSuXtfns8nswxvPDyQY6pgHUC9smxB6I39Ec3HRv%2BWSnED8JrJsjLEUyEbDjPNgjL%2FMdC%2BxT3r4oyJy2RvOqhdMKQ9APDBXyUcXJSTXdqNYp83iIt5g%2Fw6HSFjtvSGyaj22TUZu5RJJvejAL9So%2FbP67som18zTcL5iWDGst%2BKsyj8aPSYyhHD7z1V%2F07JcO4D5r0n%2B7poTK5okt5WznFlFxhUt7Aji5Lom%2FO5JITC5c%2F4bofIDq&X-Amz-Signature=92789ba89e652520356310bf55c10511240aabadfca71efd3ccc777b6de57f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

