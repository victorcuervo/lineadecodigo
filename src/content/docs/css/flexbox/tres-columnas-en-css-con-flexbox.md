---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5IIDUIL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGfdruHMMN1Ng7Sj1ZKyE91K%2Bguv5xjhSG8oY3TwXjBoAiEAjW6j%2F2o4J6Wsi%2B5Cc402dmf655NPAYFsTtTtMXAet1Mq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDjq8G4RVmSdvth0qyrcA3rXeClgp9xEBJCLEgAR2ge7VtsxIYhkph%2Fl3uBfgd7a2cy2YgsXnonpRkOCoMz7XkphgvP1t9BL5AL7sPym69I7YHmDP6kPvfEdjoCjGpV62ZzFe%2Bkz073el1mBTHvLObRYERlxweFgmhc6TQggPT%2Be%2BwgrkZgN3ia8U0omve%2BWbjWdhHTflNvn1LfYquiz1PV1JC%2FMn4bsWMMOOaasLRyWdyaXi0pMR0xlbDIrITt7hy11zzy8LR1pO%2FzA%2BWTbFHRAN2HJdJRgwxk0%2B3YDgZzMhDqQpnDZNerZd%2Bclc%2FBWG20ZdBP%2F0NIo9zB4E1BKsSoLo%2BNMKTvEfZdq%2FxihGZw7fTuRkwUxlU4WLHXPOfME2GQFZTJWGDoV9FHXpu6cual0yQPovGkJh7anjtSPY%2B95lpsaN8t6blXCkikrLwxgm2VisdTuyf64%2FjT8RHoLxrZq0q%2BcdTH9UvBYk1ugfSs0mbYhIQQFReEdPoaelQfkVcx83RYsgNFcwyrY46Uan16YujfVVOt5N6hn6pwuaYF6QO1JbAcUzaba%2FXt9d4SJtwWFEsEAb3mAGJ6GRP4ytRe4n6Lcc8%2BccpvWis4oVZ5Nf1z7avjFT8dw8JKDAQZ7tFdYHy2hkq%2F92%2Bd1MLS0w8kGOqUBLkW%2BQy6gcS8p6lRvnl%2F8kV%2FKlfXq37jAq%2FaBo4FfV045eAGrTsezpRm4tWCN2SymlB35LeJZeWvD8BVAMLkO079B7mjpcPZfsABLpFIaAXq%2F62ZvWJlF2AthQ34J1xD809LfEIHAc%2FiaRbZ6cCvHKqdOlZ5qKlUrZk814lN7FpUSKCif8QYRPcvqRr6UvgxMHRPugiD1MZV3vbt%2B9acnHyalcraK&X-Amz-Signature=0dd9cf84f091a9af40366e2bf4a4420eed977077b0f524ef3c35425796b503eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5IIDUIL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGfdruHMMN1Ng7Sj1ZKyE91K%2Bguv5xjhSG8oY3TwXjBoAiEAjW6j%2F2o4J6Wsi%2B5Cc402dmf655NPAYFsTtTtMXAet1Mq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDjq8G4RVmSdvth0qyrcA3rXeClgp9xEBJCLEgAR2ge7VtsxIYhkph%2Fl3uBfgd7a2cy2YgsXnonpRkOCoMz7XkphgvP1t9BL5AL7sPym69I7YHmDP6kPvfEdjoCjGpV62ZzFe%2Bkz073el1mBTHvLObRYERlxweFgmhc6TQggPT%2Be%2BwgrkZgN3ia8U0omve%2BWbjWdhHTflNvn1LfYquiz1PV1JC%2FMn4bsWMMOOaasLRyWdyaXi0pMR0xlbDIrITt7hy11zzy8LR1pO%2FzA%2BWTbFHRAN2HJdJRgwxk0%2B3YDgZzMhDqQpnDZNerZd%2Bclc%2FBWG20ZdBP%2F0NIo9zB4E1BKsSoLo%2BNMKTvEfZdq%2FxihGZw7fTuRkwUxlU4WLHXPOfME2GQFZTJWGDoV9FHXpu6cual0yQPovGkJh7anjtSPY%2B95lpsaN8t6blXCkikrLwxgm2VisdTuyf64%2FjT8RHoLxrZq0q%2BcdTH9UvBYk1ugfSs0mbYhIQQFReEdPoaelQfkVcx83RYsgNFcwyrY46Uan16YujfVVOt5N6hn6pwuaYF6QO1JbAcUzaba%2FXt9d4SJtwWFEsEAb3mAGJ6GRP4ytRe4n6Lcc8%2BccpvWis4oVZ5Nf1z7avjFT8dw8JKDAQZ7tFdYHy2hkq%2F92%2Bd1MLS0w8kGOqUBLkW%2BQy6gcS8p6lRvnl%2F8kV%2FKlfXq37jAq%2FaBo4FfV045eAGrTsezpRm4tWCN2SymlB35LeJZeWvD8BVAMLkO079B7mjpcPZfsABLpFIaAXq%2F62ZvWJlF2AthQ34J1xD809LfEIHAc%2FiaRbZ6cCvHKqdOlZ5qKlUrZk814lN7FpUSKCif8QYRPcvqRr6UvgxMHRPugiD1MZV3vbt%2B9acnHyalcraK&X-Amz-Signature=388027a6ae7b343407dfd6958eee9126ea42aa97117463548c9c167f08fbc598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

