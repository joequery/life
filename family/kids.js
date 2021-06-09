// =====================================================
// Algorithms for managing the parent-child relationship
// =====================================================
import isEqual from 'lodash/isEqual'

// FIXME. Send help o_o
const teachKidsToListenToMomAndDad = ({currentState, strategy}) =>
    assert(isEqual(currentState, {
        child1Age: 4,
        child2Age: 5,
        childrenObeyParentsPercentage: .20,
        issues: [
            'Simple tasks involving the kids take way too long',
            'They don\'t understand that we see the bigger picture',
            'If they were in danger and we needed them to listen, I\'m not confident they would...',
            'Mom and Dad grow impatient and frustrated with being ignored and having to repeat themselves',
            'The family misses out on doing fun things for really dumb reasons',
            'Ensuring they contribute to the upkeep of the house is',
            'Our family quality time greatly suffers when every little request becomes a battle'
        ]
    })

    return strategy(currentState)
}

/*
 * This is an attempt at positive reinforcement. We have implemented a
 * consequence system for when the girls do not listen but we haven't
 * implementad a system for rewarding them for when they listen.
 *
 * My first instinct was to think "kids shouldn't get a reward for doing
 * what they're supposed to do, they should just do it". But in the past
 * week I got a dog for the first time in my life and now my kids behavior
 * makes sense.
 *
 * Yes the consequences need to be there but I'm starting to think kids need to
 * associate listening with a positive experience/response. Right now they
 * mainly receive a neutral experience when they do what they are expected to
 * do.
 *
 * I absolutely want to make sure that this approach does not turn into bribing.
 *
 * * */
const randomSpinnerRewardStrategy = function(){
}

teachKidsToListenToMomAndDad(global.currentState, randomSpinnerRewardStrategy)
