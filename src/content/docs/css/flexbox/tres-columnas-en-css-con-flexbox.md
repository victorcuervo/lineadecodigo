---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PQJHEJN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIB9Tia4oNXSaoxOD7wF0osUBKtLhTu%2F3FX5EPr7N2O1pAiEAz%2BP4rkQQwZxhfA%2B6csSj12Dr9GYSZfuAk3jKZKr9PuEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPuwqkIk%2FEIEh9fCFircA0A6U4qOcjGhy%2FrrxjVVp2ONfLthm5Ef0dUBkbNVXAqUEC94%2FDKRc1orz2JXkaq42%2F%2F4o1ej69J0sJW9vIX6J3tGSLC6MvyThD698yVnft9EKx7jT%2Fg%2BEhNjn9knrX8SC221hqqhAuukvt8NhaTn6y2d28dQVM2RcYGGReXYlot%2BpM%2B5YDxhVfnZT3fqLvnpMDBAF8WgtL735nIzkieptI2e3JO5o29sDt2mlF3%2Bqnv5CCq43HNjQSu6lTQr20iq9jtGLSR1hz%2FzWpaIuQUN1f%2BSUbGoIV7mYPDWN%2FrT5JxOQQzpjQiXTt54BKdieYTFtFCot84R5RxNMvapaWaWMcf%2BpSuAbPIVYcWu8KIScQ04scBLd7wN%2BH9W61Zk8dT0ad0hwlhJ%2BYkJBIAruny6fvOISMKll0LVjAIgqyqLkVC%2BtPEVKeHJumrhWRM0F%2BGz0YoUHdY6TAjqmSt8p0ZwFBowR7bZ7WJ05pZO6aMXeY8e7%2Bw6nJl8Bc6WjWz4X%2FwnjSpG8QNnSseZeSmcrm83IJH%2B1PouB%2FrxFCS9rX7y%2FZmyuc%2Fosxn%2B8a2p5hm9MQV98UD%2B3%2BGE1JmCNa59owrN8b%2FDUsfJXi%2Bw8GV2EC1YIxFBDZJqnEPhjSDkH4jbMOGHxckGOqUB%2FrfLQCejfUSldUo5bmrIlGkA3Xq9e5dC5LzrRz26x8XCR2p7rC6R6aCKGvlBxBsv3asOppP485bROKBOrXUxgHK9awsugVQ3WIDJVVFH5k8VOC21L99cfkqTAba4ZH%2BUInN4hw9QJjz57eBxiqVqIysSyEezcQvNKq1c2rdWpg3hWSAvxgMCqCYl7CxUIFQWFusJN4b%2FGf82a0qj4NdZAfgJPw0H&X-Amz-Signature=f95abb433490e62ffa3d33d666048bc464a7afd935469a5d9d9424defb5ff966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PQJHEJN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIB9Tia4oNXSaoxOD7wF0osUBKtLhTu%2F3FX5EPr7N2O1pAiEAz%2BP4rkQQwZxhfA%2B6csSj12Dr9GYSZfuAk3jKZKr9PuEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPuwqkIk%2FEIEh9fCFircA0A6U4qOcjGhy%2FrrxjVVp2ONfLthm5Ef0dUBkbNVXAqUEC94%2FDKRc1orz2JXkaq42%2F%2F4o1ej69J0sJW9vIX6J3tGSLC6MvyThD698yVnft9EKx7jT%2Fg%2BEhNjn9knrX8SC221hqqhAuukvt8NhaTn6y2d28dQVM2RcYGGReXYlot%2BpM%2B5YDxhVfnZT3fqLvnpMDBAF8WgtL735nIzkieptI2e3JO5o29sDt2mlF3%2Bqnv5CCq43HNjQSu6lTQr20iq9jtGLSR1hz%2FzWpaIuQUN1f%2BSUbGoIV7mYPDWN%2FrT5JxOQQzpjQiXTt54BKdieYTFtFCot84R5RxNMvapaWaWMcf%2BpSuAbPIVYcWu8KIScQ04scBLd7wN%2BH9W61Zk8dT0ad0hwlhJ%2BYkJBIAruny6fvOISMKll0LVjAIgqyqLkVC%2BtPEVKeHJumrhWRM0F%2BGz0YoUHdY6TAjqmSt8p0ZwFBowR7bZ7WJ05pZO6aMXeY8e7%2Bw6nJl8Bc6WjWz4X%2FwnjSpG8QNnSseZeSmcrm83IJH%2B1PouB%2FrxFCS9rX7y%2FZmyuc%2Fosxn%2B8a2p5hm9MQV98UD%2B3%2BGE1JmCNa59owrN8b%2FDUsfJXi%2Bw8GV2EC1YIxFBDZJqnEPhjSDkH4jbMOGHxckGOqUB%2FrfLQCejfUSldUo5bmrIlGkA3Xq9e5dC5LzrRz26x8XCR2p7rC6R6aCKGvlBxBsv3asOppP485bROKBOrXUxgHK9awsugVQ3WIDJVVFH5k8VOC21L99cfkqTAba4ZH%2BUInN4hw9QJjz57eBxiqVqIysSyEezcQvNKq1c2rdWpg3hWSAvxgMCqCYl7CxUIFQWFusJN4b%2FGf82a0qj4NdZAfgJPw0H&X-Amz-Signature=4e0ee0c408df9b143df562671c74deed11f4a1806f920442e3952b270f8d73ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

