---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC74WRYV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlb%2B%2F6A3k3xfCdR5q4DVsenkLfwyEa83AytfJtCeqhGwIhAO0NJ20tNl8LCyfKvq5x7S4UbxgLXXeLxo8KL2BTTV3lKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDqHhbvTKRjdndaOYq3APdCdGHnTME9eRGyqND9ub4ywGb0j9WrKUZRzu2CJY%2BjChJBA3GwmkOxuyVYCm6roDcGK1i7C7bwNd0GluFEmJkeQyIeFYaJ3VQdUMXnvEw2%2Bpp%2FyzL0gh2HBKmD798RocI6xeqR78sogQutSzaJPYgHssrxyyKQygGACYg9ryE5lOx4FaTFMHgsj%2FAz1DVq1PYrya06bO7rkcBq4O4G6pLY2FIb%2BKREogjk4VzhQFrf2fjde6OBNBXxcAWMy4E4RZvjzTajlT2%2FHJe9AzXbUZCHD0g1SaLzwlcr7XGYJpzpvPeH%2FhbJi5Gv9UcQOt4KPzSgnIOeAV8oBJPkN5NMgwqN%2FLVwEMC8hrz5f%2BGZ4FCtb7N7KdUxruKkKcwvajb4AeZ2Pe5%2BGeIN2%2Fs0WSwnBhEkQylqIRlyClabBafnylvJwZ%2BKoGsG5qkLQvC5kMCelL1G7ICb2RyOu7K5ue4sxSjW%2FiebEqWjLN3muOUrGfwmC0x7KHGESeNFnnSDepVfuUEi44NCKIyd2p%2BMB60dwkco5d2K4LX6hZp85CW4bIsI3IWE2oL3Obl7Gfzngyp0jB8hG70nCHFU9a7OjyXM0EGOGYp%2BIKUa0C2MaGtMqS%2BbDWre54WPLEDSYEogzD%2Fs9zJBjqkAS3Dkm1M4lwmbq2KGdY8Y5qM7Jy%2FqAAcUnN9Vjw0WmZyk8yszxJdTGeYuHYvSuOZhWDEL9U6xlTprwB%2F2Lc9eaHOtj%2B0yWr0Bn4rN2vTE8fDjhxkhfBToFqgV8jgprDrgB49c66%2FYYE0FfhMYJ%2BFPKJFUouCnwpD6hp5v2qSj%2BDmLxQFSB3FDLdnMJqzvsQbQUaDdfwHn%2B%2B9%2BuzRawQeSFDPzPVr&X-Amz-Signature=63128fc1b4ad0294fbc9f1a1d052759a47c1b7313578aa6b3ac7cdf8766d3d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC74WRYV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlb%2B%2F6A3k3xfCdR5q4DVsenkLfwyEa83AytfJtCeqhGwIhAO0NJ20tNl8LCyfKvq5x7S4UbxgLXXeLxo8KL2BTTV3lKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDqHhbvTKRjdndaOYq3APdCdGHnTME9eRGyqND9ub4ywGb0j9WrKUZRzu2CJY%2BjChJBA3GwmkOxuyVYCm6roDcGK1i7C7bwNd0GluFEmJkeQyIeFYaJ3VQdUMXnvEw2%2Bpp%2FyzL0gh2HBKmD798RocI6xeqR78sogQutSzaJPYgHssrxyyKQygGACYg9ryE5lOx4FaTFMHgsj%2FAz1DVq1PYrya06bO7rkcBq4O4G6pLY2FIb%2BKREogjk4VzhQFrf2fjde6OBNBXxcAWMy4E4RZvjzTajlT2%2FHJe9AzXbUZCHD0g1SaLzwlcr7XGYJpzpvPeH%2FhbJi5Gv9UcQOt4KPzSgnIOeAV8oBJPkN5NMgwqN%2FLVwEMC8hrz5f%2BGZ4FCtb7N7KdUxruKkKcwvajb4AeZ2Pe5%2BGeIN2%2Fs0WSwnBhEkQylqIRlyClabBafnylvJwZ%2BKoGsG5qkLQvC5kMCelL1G7ICb2RyOu7K5ue4sxSjW%2FiebEqWjLN3muOUrGfwmC0x7KHGESeNFnnSDepVfuUEi44NCKIyd2p%2BMB60dwkco5d2K4LX6hZp85CW4bIsI3IWE2oL3Obl7Gfzngyp0jB8hG70nCHFU9a7OjyXM0EGOGYp%2BIKUa0C2MaGtMqS%2BbDWre54WPLEDSYEogzD%2Fs9zJBjqkAS3Dkm1M4lwmbq2KGdY8Y5qM7Jy%2FqAAcUnN9Vjw0WmZyk8yszxJdTGeYuHYvSuOZhWDEL9U6xlTprwB%2F2Lc9eaHOtj%2B0yWr0Bn4rN2vTE8fDjhxkhfBToFqgV8jgprDrgB49c66%2FYYE0FfhMYJ%2BFPKJFUouCnwpD6hp5v2qSj%2BDmLxQFSB3FDLdnMJqzvsQbQUaDdfwHn%2B%2B9%2BuzRawQeSFDPzPVr&X-Amz-Signature=299ade557c68acb856d5c1b8043b9acc69477f7aeab8853dca0876505e69a8e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

