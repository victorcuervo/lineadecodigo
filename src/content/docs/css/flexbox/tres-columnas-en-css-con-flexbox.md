---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMHT62VO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCtv5vRS3%2BLvIpk%2B6VVfjHaDkmCO13kdA2alHDUWiJP9AIgDXyYFwLTT32BaNJnrglFMPJMbzb%2FVL61xi%2BxruLRKHsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHqZ8L3R4HdEiPaIECrcA4HkX4eMlhE2vbQyHJBN42mxrZnjbRvaUPhX4xLQgW9%2FbsFIbsdPk33bKjkOprmUpkUGExU7x2ge8quYzfyHqfLbnII%2BojL%2BlzQgRxakpc7so0sxnE5SQ8b%2BSU4cnHqv6EuY3lTEIiRjoRsQ14juRFupnjLY%2B1dWthn%2FJo9Gwv1J0aeWVhrs3CmJtkPW%2BmFgYAgqQgTRdCEzrL6hARCEFVl%2BcgG8AXTKSs5QZLyDwxmcR1YB95D2S8hQlvkcg55jq7nylgEB7JEJa75od9qf6lTLLNOUkBsY9rUgrZWnaQQg1nuOFaUDVhWPNWn1AH7R4ikloff4ZA%2FkG35L3D8OZQD5THiQto97TNWX3EjXE7nJjdavZK0t0uEI%2BNKNvWQXJwaIhRRyq5ODe0cT2KGwMvbp6KC2alnzT6Vl4t3qJdyAzJB%2FTamFAl%2B8wi%2FvwhbaAk%2FEelvkhJ%2BWasWYzyeITJiB5FeDj3XU1xk1ami4C9o7HPVW5UiaahjSXS6NwJRNphlBHcWwemuAj7i4A51v4WCTWrSgAglHqtQdKUqtswB%2BAID1L%2FyH%2Fdq6OB%2BCfOS7bUPlDgkBmqkHRUQl6MYSSrC8RPPQQIxtw4vbqZ%2FjxazMKeI4NIpjD07Xf3q3MKeQxMkGOqUBgH%2BaS7PUisg3IRkYzFn9U36ci%2F0VmfUgVIkiiJlhY0kq4oCWahjYrmuvBZccnWM9yABDu6XZCAQgyyKZp40j8bIX%2BtysgV4ogCXvtJTctGiPo3AKLkGvt6JT5EVqRnyZrl9PE0qnageN1R8sGibOcJY7NBpVM%2FEdyK%2B9Vo2v4HpLhHxGXNOPireorPwlzQNBPBtFHkHsQ4TdklYZbSMJd6%2BQeLa4&X-Amz-Signature=495e98270d86f33424cc1e11f873b707709f5fee8e42cc43cacb328a475ae938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMHT62VO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCtv5vRS3%2BLvIpk%2B6VVfjHaDkmCO13kdA2alHDUWiJP9AIgDXyYFwLTT32BaNJnrglFMPJMbzb%2FVL61xi%2BxruLRKHsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHqZ8L3R4HdEiPaIECrcA4HkX4eMlhE2vbQyHJBN42mxrZnjbRvaUPhX4xLQgW9%2FbsFIbsdPk33bKjkOprmUpkUGExU7x2ge8quYzfyHqfLbnII%2BojL%2BlzQgRxakpc7so0sxnE5SQ8b%2BSU4cnHqv6EuY3lTEIiRjoRsQ14juRFupnjLY%2B1dWthn%2FJo9Gwv1J0aeWVhrs3CmJtkPW%2BmFgYAgqQgTRdCEzrL6hARCEFVl%2BcgG8AXTKSs5QZLyDwxmcR1YB95D2S8hQlvkcg55jq7nylgEB7JEJa75od9qf6lTLLNOUkBsY9rUgrZWnaQQg1nuOFaUDVhWPNWn1AH7R4ikloff4ZA%2FkG35L3D8OZQD5THiQto97TNWX3EjXE7nJjdavZK0t0uEI%2BNKNvWQXJwaIhRRyq5ODe0cT2KGwMvbp6KC2alnzT6Vl4t3qJdyAzJB%2FTamFAl%2B8wi%2FvwhbaAk%2FEelvkhJ%2BWasWYzyeITJiB5FeDj3XU1xk1ami4C9o7HPVW5UiaahjSXS6NwJRNphlBHcWwemuAj7i4A51v4WCTWrSgAglHqtQdKUqtswB%2BAID1L%2FyH%2Fdq6OB%2BCfOS7bUPlDgkBmqkHRUQl6MYSSrC8RPPQQIxtw4vbqZ%2FjxazMKeI4NIpjD07Xf3q3MKeQxMkGOqUBgH%2BaS7PUisg3IRkYzFn9U36ci%2F0VmfUgVIkiiJlhY0kq4oCWahjYrmuvBZccnWM9yABDu6XZCAQgyyKZp40j8bIX%2BtysgV4ogCXvtJTctGiPo3AKLkGvt6JT5EVqRnyZrl9PE0qnageN1R8sGibOcJY7NBpVM%2FEdyK%2B9Vo2v4HpLhHxGXNOPireorPwlzQNBPBtFHkHsQ4TdklYZbSMJd6%2BQeLa4&X-Amz-Signature=bb861982dc1ee6aa40deac5670ae082bea1985f36f3264036eb439e2b5fe3bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

