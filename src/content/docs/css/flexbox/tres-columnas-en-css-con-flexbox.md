---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTW4BS5M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpXNe1QGTVqFu9D9EW2K8orATY6Bi1zXEDZGf6OfZPQgIgZbSriwwOxsGkrn4OtF6UhvculJH7ekuOrYtgtTzO6AYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbo8VbgdkMe9Un6FSrcAworVEC1zDZ1P%2BWxqUxOP1IOg8lVkPczbCAHAxmOcxRzNdhBggn3m%2F%2BeSwsucpnVbNhcsZ7lRMXJx%2FXt01vy8gECAQKNMZhry3Zd6kpRafXx2s%2BmeMN5HUrindBKg6GB02d4wLzAm%2BLeAiYsh7MUtx%2F%2Bfb7baok8E4xk7h1HqKnrZtkbXWzvm9bj%2FH8y8hIpeZ6ScA0%2B%2FlUzq7a1%2B6BtBn8jt4oJ5twFVFvjHi3%2Bn3d37Z9JLrXD7Lr4wS%2F8zoBfK2VrsYjbXYWX86uqv%2BHpL3COp%2BJEiV8nacI7RM7yEWFYYOI6THB6LGrSmpGxjQnNsAEtWXd6RD7Op%2BYUS6shi0GWUwcMOIzOmgBSDMunf%2FiU9DksSo82%2BzcSxxcYMcb2uXzm13b0OzxWcGsabY4uCdoKASEblxPoLJxfYqtw3UVHAUfxz8JcV3kZwLnDfE2w0HBLqOLE2lQcieMfdFkG4U%2FaRj8uLxuBtxbrorEIAuJHm9RJJ09Ujb3yhH8QNtqjDmWdWC8Q6vYxMgIGh4FeZB7iwcv8z3W4hGjjjrstLKnjbm59UbKvtDSUepmADhcz7mX7Of3QDZtidEKk6B40k5nizfKtoEDorxxmY9gatq1kWeIgZT91btJpDS6KMIX90skGOqUBg6FEF2eAUXvU1hJaqae%2BaNZ2EsWcvXmJ%2FEFVFdQztH9SPg5xTu1MtvMUUFW1xPIYqTUGugUDEFmJQwxy78Y3nqYdIrxtxgWZVWYZ6tDmsgFHb4nsFHnmYMMUj7aeKH2wv7Icn2l2j54lWYvI23sl%2B%2B6soVkgPmzpV%2Bt5yYu5K%2FIEFNA3wlEZTzw8sfA1KAFXhs8%2BKLCfE7I1Rkj7i0YTVZvp0Yxw&X-Amz-Signature=e457b4b7d1fd0245250e05a61831b4daa6d0f1a5b28198ad836e4fbc9d1a655c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTW4BS5M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpXNe1QGTVqFu9D9EW2K8orATY6Bi1zXEDZGf6OfZPQgIgZbSriwwOxsGkrn4OtF6UhvculJH7ekuOrYtgtTzO6AYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbo8VbgdkMe9Un6FSrcAworVEC1zDZ1P%2BWxqUxOP1IOg8lVkPczbCAHAxmOcxRzNdhBggn3m%2F%2BeSwsucpnVbNhcsZ7lRMXJx%2FXt01vy8gECAQKNMZhry3Zd6kpRafXx2s%2BmeMN5HUrindBKg6GB02d4wLzAm%2BLeAiYsh7MUtx%2F%2Bfb7baok8E4xk7h1HqKnrZtkbXWzvm9bj%2FH8y8hIpeZ6ScA0%2B%2FlUzq7a1%2B6BtBn8jt4oJ5twFVFvjHi3%2Bn3d37Z9JLrXD7Lr4wS%2F8zoBfK2VrsYjbXYWX86uqv%2BHpL3COp%2BJEiV8nacI7RM7yEWFYYOI6THB6LGrSmpGxjQnNsAEtWXd6RD7Op%2BYUS6shi0GWUwcMOIzOmgBSDMunf%2FiU9DksSo82%2BzcSxxcYMcb2uXzm13b0OzxWcGsabY4uCdoKASEblxPoLJxfYqtw3UVHAUfxz8JcV3kZwLnDfE2w0HBLqOLE2lQcieMfdFkG4U%2FaRj8uLxuBtxbrorEIAuJHm9RJJ09Ujb3yhH8QNtqjDmWdWC8Q6vYxMgIGh4FeZB7iwcv8z3W4hGjjjrstLKnjbm59UbKvtDSUepmADhcz7mX7Of3QDZtidEKk6B40k5nizfKtoEDorxxmY9gatq1kWeIgZT91btJpDS6KMIX90skGOqUBg6FEF2eAUXvU1hJaqae%2BaNZ2EsWcvXmJ%2FEFVFdQztH9SPg5xTu1MtvMUUFW1xPIYqTUGugUDEFmJQwxy78Y3nqYdIrxtxgWZVWYZ6tDmsgFHb4nsFHnmYMMUj7aeKH2wv7Icn2l2j54lWYvI23sl%2B%2B6soVkgPmzpV%2Bt5yYu5K%2FIEFNA3wlEZTzw8sfA1KAFXhs8%2BKLCfE7I1Rkj7i0YTVZvp0Yxw&X-Amz-Signature=25c4013552d6e99d6405d83ba4a90b05754efd6896725d455753175a8dcbc526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

